import React, { PureComponent } from 'react'
// import login_image from '../img/background.jpg'
import { Route } from "react-router-dom";
import Home from "../pages/Home";

export default class Login extends PureComponent {

    // constructor(props) {
    //     super(props);
    // }
    
    render() {
        return (
            // ref={}, get tge reference of current element, and get its reference during the render time
            <div  ref={this.props.containerRef}>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <span>
                    (Note: login/register is malfunctional with css and js when merged to header componenet. We'll fix this soon. Sorry for the inconvenience.) &nbsp;
                </span>
                <br></br>
                <br></br>
                <div className='title'> <h2>Login</h2> </div>
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
                        I have read and agree to the Terms of Use &nbsp;
                        {/* <a>Terms of Use </a> &nbsp;
                        and &nbsp;
                        <a>Privacy Policy</a> */}
                    </span>
                    <br></br>
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
