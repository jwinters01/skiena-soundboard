import React from 'react'


const snd = new Audio("./test.wav");
class TestSoundButton extends React.Component {
    
    constructor(props) {
        super(props);
        this.loadSound = this.loadSound.bind(this);
        this.playSound = this.playSound.bind(this);
    }
    
    loadSound() {
       //createjs.Sound.registerSound("public/sounds/test.wav", soundID);
    }

    playSound() {
        //createjs.Sound.play(soundID);
        document.getElementById('play').play();
    }

    componentDidMount() {
        // Load the sounds on component mount
        //this.loadSound(soundID1);
    }


    render(){
        return (
            <div>
                <audio id="play" src="http://www.soundjay.com/button/beep-07.wav"></audio>
                <button onClick={this.playSound}>Play</button>
              
            </div>
        );
    }
}

export default TestSoundButton;