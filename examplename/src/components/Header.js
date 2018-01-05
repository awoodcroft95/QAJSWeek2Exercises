import React, { Component } from 'react';
import logo1 from '../media/Redstarbird.png';
import logo2 from '../media/Imperial_Emblem.svg';
import Sound from 'react-sound';
import music1 from '../media/ImperialMarch.mp3';
import music2 from '../media/DuelOfTheFates.mp3';
import logo3 from '../media/JediLogo.png';

class Header extends Component {
    
    constructor() {
        super();

        let keys = {
            d: false,
            o: false,
            f: false
        };

        this.state = {
            hasBeenClicked: false,
            status: Sound.status.STOPPED,
            logo: logo1,
            music: music1
        };

        let logoStyle = {
            background: 'white',
            borderRadius: '50%'
        }

        window.addEventListener("keydown", function (event) {
            if (event.keyCode === 68) {
                keys["d"] = true;
            }
            if (event.keyCode === 79){
                keys["o"] = true;
            }
            if (event.keyCode === 70){
                keys["f"] = true;
            }
            if (keys["d"] && keys["f"] && keys["o"]) {
                console.log("Duel of the Fates");
                this.setState({
                    status: Sound.status.PLAYING,
                    logo: logo3,
                    logoStyle: logoStyle,
                    music: music2
                });
            }
        }.bind(this));

        window.addEventListener("keyup", function (event) {
            if (event.keyCode === 68) {
                keys["d"] = false;
            }
            if (event.keyCode === 79){
                keys["o"] = false;
            }
            if (event.keyCode === 70){
                keys["f"] = false;
            }
        });

        this.onButtonClick = () => {
            if (this.state.hasBeenClicked) {
                this.setState({
                    hasBeenClicked: false,
                    status: Sound.status.STOPPED,
                    logo: logo1,
                    logoStyle: {}
                });
            }
            else {
                this.setState({
                    hasBeenClicked: true,
                    status: Sound.status.PLAYING,
                    logo: logo2,
                    logoStyle: logoStyle,
                    music: music1
                });
            }
        }

    }
    render() {
        return (
            <header className="App-header">
                <Sound url={this.state.music}
                    autoLoad={true}
                    playStatus={this.state.status}
                />
                <img src={this.state.logo} className="App-logo" alt="logo" onClick={this.onButtonClick} style={this.state.logoStyle} />
                <h1 className="App-title">STAR WARS SHIP API</h1>
            </header>
        );
    };
}

export default Header;