import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './main';
import MainContainer from './components/maincontainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainContainer />
      </div>
    );
  }
}

export default App;
