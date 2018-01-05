import React, { Component } from 'react';
import logo from '../images/Redstarbird.png';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">STAR WARS SHIP API</h1>
            </header>
        );
    };
}

export default Header;