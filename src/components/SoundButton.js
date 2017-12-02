import React from 'react'

class SoundButton extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            filePath: this.props.filePath,
        }
        this.playSound = this.playSound.bind(this);
    }
    
    playSound(name, filePath) {

        // const audio = document.querySelector("audio");
        // audio.src = URL.createObjectURL(filePath);
        document.getElementById(name).play();
    }

    render() {
        const { name, filePath } = this.state;
        let isDisabled = false;
        if(name.search("None") != -1) {
            isDisabled = true;
        }
        return (
            <div>
                <audio id={name} src={filePath}></audio>
                <input className="btn btn-danger" disabled={isDisabled} type="button" value={name} onClick={() => {this.playSound(name)}}></input>
            </div>
        );
    }
}

export default SoundButton;