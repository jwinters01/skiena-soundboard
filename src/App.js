import React, { Component } from 'react';
import logo from './skiena.png';
import './App.css';
import SoundType from './components/SoundType';

// Sounds

// Sound Effects
import kachunk from './sounds/kachunk1.wav';
import kachunk2 from './sounds/kachunk2.m4a';
import okay1 from './sounds/okay1.wav';
import okay2 from './sounds/okay2.m4a';
import boop1 from './sounds/boop1.m4a';
import bzzt1 from './sounds/bzzt1.m4a';

// Phrases
import doYouSeeThat from './sounds/doYouSeeThat.m4a';
import anyQuestions from './sounds/any_questions.m4a';
import itDepends from './sounds/it_depends.m4a';
import makeSense from './sounds/make_sense.m4a';
import maybeNot from './sounds/maybe_not.m4a';
import questionsAboutThat from './sounds/questions_about_that.m4a';
import takeALook from './sounds/take_a_look.m4a';
import theAnswerIs from './sounds/the_answer_is.m4a';

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
    name: 'Ohkay #1',
    filePath: okay1,
  },
  {
    name: 'Ohkay #2',
    filePath: okay2,
  },
  {
    name: 'Boop #1',
    filePath: boop1,
  },
  {
    name: 'Bzzt!',
    filePath: bzzt1,
  },
  {
    name: 'None3',
    filePath: 'http://www.soundjay.com/button/beep-07.wav',
  },
  {
    name: 'None4',
    filePath: 'http://www.soundjay.com/button/beep-07.wav',
  },
  {
    name: 'None5',
    filePath: 'http://www.soundjay.com/button/beep-07.wav',
  },
  {
    name: 'None6',
    filePath: 'http://www.soundjay.com/button/beep-07.wav',
  },
  {
    name: 'None7',
    filePath: 'http://www.soundjay.com/button/beep-07.wav',
  },
  {
    name: 'None8',
    filePath: 'http://www.soundjay.com/button/beep-07.wav',
  },
  
];

const soundBtnList2 = [
  {
    name: 'Do you see that?',
    filePath: doYouSeeThat,
  },
  {
    name: 'Any Questions?',
    filePath: anyQuestions,
  },
  {
    name: '...It depends',
    filePath: itDepends,
  },
  {
    name: 'Does that make sense?',
    filePath: makeSense,
  },
  {
    name: 'Maybe not...',
    filePath: maybeNot,
  },
  {
    name: 'Any questions about that?',
    filePath: questionsAboutThat,
  },
  {
    name: 'Lets take a look',
    filePath: takeALook,
  },
  {
    name: 'The answer is...',
    filePath: theAnswerIs,
  },
  {
    name: 'None17',
    filePath: 'http://www.soundjay.com/button/beep-07.wav',
  },
  {
    name: 'None18',
    filePath: 'http://www.soundjay.com/button/beep-07.wav',
  },
  {
    name: 'None19',
    filePath: 'http://www.soundjay.com/button/beep-07.wav',
  },
  {
    name: 'None20',
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

        <div className="row justify-content-center">
          <div className="col-sm-6">
            <label className="soundLabel"> Sound Effects </label>
              <SoundType typeOfSound={"Skien-effects"} soundBtnList={soundBtnList} />
          </div>

          <div className="col-sm-6">
            <label className="soundLabel"> Phrases </label>
            <SoundType typeOfSound={"Skien-effects"} soundBtnList={soundBtnList2} />
          </div>
      </div>
      </div>
    );
  }
}

export default App;
