import React, { Component } from 'react';
import logo from './skiena.png';
import './App.css';
import SoundType from './components/SoundType';
import { Row, Col } from 'react-bootstrap';
// Sounds
import kachunk from './sounds/kachunk1.wav';
import okay1 from './sounds/okay1.wav';
import doYouSeeThat from './sounds/doYouSeeThat.m4a';
import kachunk2 from './sounds/kachunk2.m4a';

const soundBtnList = [
  {
    name: 'Kachunk #1',
    filePath: kachunk,
  },
  {
    name: 'Kachunk #2',
    filePath: kachunk2,
  },
  {
    name: 'Ohkay',
    filePath: okay1,
  },
  {
    name: 'Do you see that?',
    filePath: doYouSeeThat,
  },
  {
    name: 'Bzzt',
    filePath: 'http://www.soundjay.com/button/beep-07.wav',
  },
  {
    name: 'Vvoop',
    filePath: 'http://www.soundjay.com/button/beep-07.wav',
  },
  
];
// affects
class App extends Component {

  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <header className="App-header col">
            <img src={logo} className="App-logo" alt={logo}/>
            <h1 className="App-title">Skien-effects Soundboard</h1>
          </header>
        </div>

        <div className="row">
          <div className="col-sm-3 offset-sm-3">
              <SoundType typeOfSound={"Skien-effects"} soundBtnList={soundBtnList} />
          </div>

          <div className="col-sm-3">
            <SoundType typeOfSound={"Skien-effects"} soundBtnList={soundBtnList} />
          </div>
        
      </div>
      </div>
    );
  }
}

export default App;
