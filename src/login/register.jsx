import React, { PureComponent } from 'react'
// import login_image from '../img/register.jpg'
import { BrowserRouter, Route } from "react-router-dom";
import main from "../App";

export default class Register extends PureComponent {

    // constructor(props) {
    //     super(props);
    // }
    
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
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <span>
                    (Note: login/register is malfunctional with css and js when merged to header componenet. We'll fix this soon. Sorry for the inconvenience.) &nbsp;
                </span>
                <br></br>
                <br></br>
                <div className='title'> <h2>Register</h2> </div>
                <br></br>
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
                        I have read and agree to the Term of Use &nbsp;
                        {/* <a href="#">Terms of Use </a> &nbsp;
                        and &nbsp;
                        <a href="#">Privacy Policy</a> */}
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
