from flask import Response, request
from flask_jwt_extended import create_access_token
from database.models import User
from flask_restful import Resource
import datetime
from mongoengine.errors import FieldDoesNotExist, NotUniqueError, DoesNotExist
from resources.errors import SchemaValidationError, EmailAlreadyExistsError, UnauthorizedError, \
InternalServerError

class SignupApi(Resource):
    def post(self):
        headers = {'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Headers": "Content-Type", "Access-Control-Allow-Methods": "OPTIONS,POST,GET" }
        try:
            body = request.get_json(force=True)
            user = User(**body)
            uname = user.username
            if uname.find('@') == -1 or uname.find('<') != -1 or uname.find('>') != -1 or uname.find('<') != -1 or uname.find('\'') != -1 or uname.find('\"') != -1 or uname.find(';') != -1 or uname.lower().find('user') != -1:
                raise ValueError("Suspicious characters detected.")
            passwd = user.password
            if passwd.find('<') != -1 or passwd.find('>') != -1 or passwd.find('<') != -1 or passwd.find('\'') != -1 or passwd.find('\"') != -1 or uname.find(';') != -1 or uname.lower().find('user') != -1:
                raise ValueError("Suspicious characters detected.")
            user.hash_password()
            user.save()
            id = user.id
            response = {'id': str(id), 'username': uname}
            return response, 200, headers
        except FieldDoesNotExist:
            raise SchemaValidationError
        except NotUniqueError:
            return {'id': "", 'username': "Email already exists. Not loggined in"}, 400, headers
        except ValueError as e:
            return {'id': "", 'username': str(e)}, 400, headers
        # except Exception as e:
        #     raise InternalServerError

class LoginApi(Resource):
    def post(self):
        headers = {'Access-Control-Allow-Origin': '*', "Access-Control-Allow-Headers": "Content-Type", "Access-Control-Allow-Methods": "OPTIONS,POST,GET" }
        try:
            body = request.get_json(force=True)
            user = User.objects.get(username=body.get('username'))
            authorized = user.check_password(body.get('password'))
            uname = user.username
            if uname.find('@') == -1 or uname.find('<') != -1 or uname.find('>') != -1 or uname.find('<') != -1 or uname.find('\'') != -1 or uname.find('\"') != -1 or uname.find(';') != -1 or uname.lower().find('user') != -1:
                raise ValueError("Suspicious characters detected. User should only use a valid email.")
            passwd = user.password
            if passwd.find('<') != -1 or passwd.find('>') != -1 or passwd.find('<') != -1 or passwd.find('\'') != -1 or passwd.find('\"') != -1 or uname.find(';') != -1 or uname.lower().find('user') != -1:
                raise ValueError("Suspicious characters detected.")
            if not authorized:
                raise UnauthorizedError

            expires = datetime.timedelta(days=7)
            access_token = create_access_token(identity=str(user.id), expires_delta=expires)
            return {'token': access_token, 'username': uname}, 200, headers
        except (UnauthorizedError, DoesNotExist):
            return {'id': "", 'username': "Username or password is incorrect. Not logged in"}, 401, headers # raise EmailAlreadyExistsError
        except ValueError as e:
            return {'id': "", 'username': str(e)}, 400, headers
        # except Exception as e:
        #     raise InternalServerError