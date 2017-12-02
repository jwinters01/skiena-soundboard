import React, { Component } from 'react';
import logo from './skiena.png';
import './App.css';
import TestSoundButton from './components/testSoundButton';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt={logo}/>
          <h1 className="App-title">Steven Skiena Soundboard</h1>
        </header>
        <p className="App-intro">
          <TestSoundButton />
        </p>
      </div>
    );
  }
}

export default App;
