import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const objArray = [
    {
        name: "X-Wing",
        speed: 1050,
        minCrew: 1,
        length: 12,
        passengers: 1
    }
];


ReactDOM.render(
    <App tData = {objArray}/>, document.getElementById('root'));
registerServiceWorker();
