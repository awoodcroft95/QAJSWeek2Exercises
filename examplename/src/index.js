import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const objArray = [
    {
        id: 0,
        name: "X-Wing",
        speed: 1050,
        minCrew: 1,
        length: 12,
        passengers: 1
    },
    {
        id: 1,
        name: "Millennium Falcon",
        speed: 1050,
        minCrew: 1,
        length: 34.37,
        passengers: 6
    }
];


ReactDOM.render(
    <App tData = {objArray}/>, document.getElementById('root'));
registerServiceWorker();
