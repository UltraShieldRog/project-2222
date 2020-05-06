import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import TopMenu from './components/TopMenu';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <TopMenu />
        <Routes />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
