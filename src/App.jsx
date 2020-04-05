import React from 'react';
import './App.scss';
import './components/login/style.scss'
import {Login, Register} from './components/login/index'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_login_active: true
    }
  }
  
  changeState() {
    const { is_login_active } = this.state;
    this.setState(prevState => ({ is_login_active: !prevState.is_login_active }));
  }
  
  render() {
    const {is_login_active} = this.state;
    const next = is_login_active ? 'Register' : 'Login';
    const currentActive = is_login_active ? 'login' : 'register';
    return (
      <div className='App'>
        <div className='login'>
          <div className='base_container' ref={ref => (this.container = ref)}>
            {/* true && expression == expression */}
            {is_login_active && <Login containerRef={(ref) => this.next = ref}/> }
            {!is_login_active && <Register containerRef={(ref) => this.next = ref}/>}
            <div>
            
            <div className='already'
              ref={ref => (this.rightSide = ref)}
              onClick={this.changeState.bind(this)}
            >
              {is_login_active && <a> New user? Register</a>}
              {!is_login_active && <a> Have account? Login</a>}
              
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
