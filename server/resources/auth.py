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
        try:
            body = request.get_json(force=True)
            user = User(**body)
            uname = user.username
            if uname.find('@') == -1 or uname.find('<') != -1 or uname.find('>') != -1 or uname.find('<') != -1 or uname.find('\'') != -1 or uname.find('\"') != -1 or uname.find(';') != -1 or uname.lower().find('user') != -1:
                raise ValueError("Suspicious characters detected. User should only use a valid email.")
            passwd = user.password
            if passwd.find('<') != -1 or passwd.find('>') != -1 or passwd.find('<') != -1 or passwd.find('\'') != -1 or passwd.find('\"') != -1 or uname.find(';') != -1 or uname.lower().find('user') != -1:
                raise ValueError("Suspicious characters detected.")
            user.hash_password()
            user.save()
            id = user.id
            return {'id': str(id)}, 200
        except FieldDoesNotExist:
            raise SchemaValidationError
        except NotUniqueError:
            raise EmailAlreadyExistsError
        except ValueError as e:
            print(e)
        # except Exception as e:
        #     raise InternalServerError

class LoginApi(Resource):
    def post(self):
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
            return {'token': access_token}, 200
        except (UnauthorizedError, DoesNotExist):
            raise UnauthorizedError
        except ValueError as e:
            print(e)
        # except Exception as e:
        #     raise InternalServerError