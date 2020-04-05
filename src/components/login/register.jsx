import React, { PureComponent } from 'react'
import login_image from '../../images/register.jpg'
import { BrowserRouter, Router, Link, Route, Redirect } from "react-router-dom";
import main from "../../Main";

export class Register extends PureComponent {

    constructor(props) {
        super(props);
    }
    
    state = {
        redirect: false
    }
    
    setRedirect = () => {
        this.setState({
          redirect: true
        })
    }
    
    renderRedirect = () => {
        if (this.state.redirect) {
            return (
                <BrowserRouter>
                    <Route path="/home" component={main}/>
                </BrowserRouter>
            )
        }
    }
    
    render() {
        return (
            <div ref={this.props.containerRef}>
                <div className='title'> Register </div>
                <div className='content'>
                    {/* uniformed form for both login and register */}
                    <div className='form'>
                    
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name='username' placeholder='Username' required/>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="username">Password</label>
                            <input type="text" name='password' placeholder='Password' required/>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="username">Email</label>
                            <input type="text" name='email' placeholder='Email'/>
                        </div>
                        
                    </div>
                    
                    <input type="checkbox" id="rememberMe" required autocomplete="off"/>
                    <label className='agreement' for="rememberMe"></label>
                    <span>
                        I have read and agree to the &nbsp;
                        <a href="#">Terms of Use </a> &nbsp;
                        and &nbsp;
                        <a href="#">Privacy Policy</a>
                    </span>
                    <div> {this.renderRedirect()}
                        <button onClick={this.setRedirect} type='submit'>
                            Register
                        </button>
                    </div>
                    
                    {/* <div className="already">
                        Have account? &nbsp;
                        <a href="#">Login</a>
                    </div> */}
                </div>
            </div>
        )
    }
}
