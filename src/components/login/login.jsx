import React, { PureComponent } from 'react'
import login_image from '../../images/background.jpg'
import { Router, Switch, Route } from "react-router-dom";
import Home from "../../pages/Home";

export class Login extends PureComponent {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            // ref={}, get tge reference of current element, and get its reference during the render time
            <div  ref={this.props.containerRef}>
                <div className='title'> Login </div>
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
                        
                    </div>
                    
                    <input type="checkbox" id="rememberMe" required autocomplete="off"/>
                    <label className='agreement' for="rememberMe"></label>
                    <span>
                        I have read and agree to the &nbsp;
                        <a href="#">Terms of Use </a> &nbsp;
                        and &nbsp;
                        <a href="#">Privacy Policy</a>
                    </span>
                    
                    <button onClick={() => <Route path="/home" component={Home}/>} type='submit'>
                        Login
                    </button>
                    {/* <div class="already">
                        New user? &nbsp;
                        <a href="#">Register</a>
                    </div> */}
                </div>
            </div>
        )
    }
}
