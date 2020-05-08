import React, { Component } from "react";
import { FormGroup, FormControl, FormLabel } from "react-bootstrap";
import Button from '@material-ui/core/Button';
import Popup from '../components/Popup';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <FormLabel>{label}</FormLabel>
      <FormControl componentClass="textarea" style={{ height:40, margin: "40px"}}  {...props} />}
    </FormGroup>
  );
}

export default class Login extends Component{
  constructor(props){
    super(props);

    this.state = {
      username:"",
      password:"",
      showPopup: false,
      messagePopup: "login",
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
    let url = "http://localhost:8080/register"
    let formData  = new FormData();
    let data = this.state;
    for(let name in data) {
      formData.append(name, data[name]);
    }

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    }).then( res => res.json())
    .then(data=>{
      localStorage.setItem('access_token', data.access_token);
      
      localStorage.setItem('username', data.username);

      if (localStorage.getItem("access_token") !== null && localStorage.getItem("access_token")!=="undefined") {
        window.location.replace("/")
      }else{
          alert(data.error)
      }
    }).catch(err => console.log(err));
  }

  handleSignIn = e =>{
    // this.togglePopup();
    this.setPopupMessageLogin();
    e.preventDefault() ;
    let url = "http://localhost:8080/login"
    let formData  = new FormData();
    let data = this.state;
    for(let name in data) {
      formData.append(name, data[name]);
    }

    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    }).then( res => res.json())
    .then(data=>{
      localStorage.setItem('access_token', data.access_token);
      
      localStorage.setItem('username', data.username);

      if (localStorage.getItem("access_token") !== null && localStorage.getItem("access_token")!=="undefined") {
        window.location.replace("/home")
      }else{
          alert(data.error);
      }
    }).catch(err => console.log(err));
  }
  
  render(){
    return (
      <div>
        <div className="LoginForm" style={{margin: "200px"}}>
          {!this.state.showPopup ?
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
            : null
          }
          {this.state.showPopup ?
            <Popup
              text={this.state.messagePopup === "login" ? 'Login request is sent.' : 'Register request is sent.' }
              closePopup={this.togglePopup.bind(this)}
            />
            : null
          }
        </div>
      </div>
    );
  }
}