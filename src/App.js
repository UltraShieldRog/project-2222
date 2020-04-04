import React from 'react';
import './App.css';
import Home from './pages/Home';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Home />
      // <div>
      //   <div className="content">
      //     <Switch>
      //       <Route path="/" component={Home} />
      //     </Switch>
      //   </div>
      // </div>
    );
  }
}

export default App;
