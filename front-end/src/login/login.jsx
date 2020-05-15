import React, { Component } from "react";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import Button from '@material-ui/core/Button';
import Popup from '../components/Popup';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <FormLabel>{label}</FormLabel>
      <FormControl componentclass="textarea" style={{ height:40, margin: "40px"}}  {...props} />
    </FormGroup>
  );
}

export default class Login extends Component{
  constructor(props){
    super(props);
    this.currentURL = "http://localhost:8080";

    this.state = {
      username:"",
      password:"",
      showPopup: false,
      messagePopup: "login",
      currentLogin: "(Not logged in)",
    }
  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  setPopupMessageLogin() {
    this.setState({
      showPopup: !this.state.showPopup,
      messagePopup: "login"
    });
  }

  setPopupMessageRegister() {
    this.setState({
      showPopup: !this.state.showPopup,
      messagePopup: "register"
    });
  }

  handleChange = event =>{
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleRegistration = e =>{
    // this.togglePopup();
    this.setPopupMessageRegister();
    e.preventDefault() ;
    let url = `${this.currentURL}/register`;
    let data = this.state;

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ "username": data.username, "password": data.password }),
    })
    .then( res => res.json())
    .then( res => {
      localStorage.removeItem("username", res.username)
      localStorage.setItem("username", res.username)
    })
    .catch(err => console.log(err));
  }

  handleSignIn = e =>{
    // this.togglePopup();
    this.setPopupMessageLogin();
    e.preventDefault() ;
    let url = `${this.currentURL}/login`;
    let data = this.state;

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ "username": data.username, "password": data.password }),
    })
    .then( res => res.json())
    .then( res => {
      localStorage.removeItem("username", res.username)
      localStorage.setItem("username", res.username)
    })
    .catch(err => console.log(err));
  }
  
  render(){
    return (
      <div>
        <div className="LoginForm" style={{margin: "200px"}}>
          {!this.state.showPopup ?
            <div>
            <div>Your login status is: <b>{localStorage.getItem("username")}</b></div>
            <form>
              <FieldGroup
                id="formControlsEmail"
                type="text"
                name="username"
                label="Email address"
                value={this.state.username}
                onChange={this.handleChange}
                placeholder="Enter email" 
              />
              <FieldGroup 
                id="formControlsPassword" 
                type="password"
                name="password"
                label="Password" 
                value={this.state.password}
                onChange={this.handleChange}
                placeholder="Password"
                help="Password length should be at least 8 characters long." 
              />

              <Button onClick={this.handleSignIn} variant="contained" color="primary" style={{marginTop:"20px" ,marginRight:"20px"}}>Log in</Button>
              <Button onClick={this.handleRegistration}  variant="contained" color="primary" style={{marginTop:"20px"}}> Register</Button>

            </form>
            </div>
            : null
          }
          {this.state.showPopup ?
            <Popup
              text={this.state.messagePopup === "login" ? 'Login request has been sent.' : 'Register request has been sent.' }
              closePopup={this.togglePopup.bind(this)}
            />
            : null
          }
        </div>
      </div>
    );
  }
}