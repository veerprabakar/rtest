import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
import MyData from './components/MyData';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

class App extends Component {

  //global loading screen:
  renderLoadingView() {
    return (
      <div>
        <span>
          Loading ...
        </span>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title"></h1>
        </header>
        <p>
          <MyData name="" />
        </p>
      </div>
    );
  }
}

export default App;
