import React, {Component} from 'react';
import logo from './Redstarbird.png';
import './App.css';
import ReactDOM from 'react-dom';
import Ship from './Ship';

class App extends Component {
  constructor() {
    super();
    this.state = {
      objArray :[
        {
          id: 0,
          name: "X-Wing",
          speed: 1050,
          minCrew: 1,
          length: 12,
          passengers: 1
        }, {
          id: 1,
          name: "Millennium Falcon",
          speed: 1050,
          minCrew: 1,
          length: 34.37,
          passengers: 6
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Inputs/>
        <Table tDataProp={this.state.objArray}/>
      </div>

    );
  }
}

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">STAR WARS SHIP API</h1>
      </header>
    );
  };
}

class Inputs extends Component {
  render() {
    return (
      <div>
        <input id="inputShipName" type="text" placeholder="Enter a name"></input>
        <br></br>
        <input id="inputShipSpeed" type="number" placeholder="Enter a speed"></input>
        <br></br>
        <input id="inputShipCrew" type="number" placeholder="Enter minimum crew size"></input>
        <br></br>
        <input id="inputShipLength" type="number" placeholder="Enter ship length"></input>
        <br></br>
        <input
          id="inputShipPassengers"
          type="number"
          placeholder="Enter max number of passengers"></input>
        <br></br>
        <input type="button" onclick="createShip()" value="Create"></input>
        <input type="button" onclick="updateShip()" value="Update"></input>
        <br></br>
        <div id="idStore" value=""></div>
      </div>
    );
  };
}

class Table extends Component {
  render() {
    let ships = null;
    ships = (
      <tbody id="shipDetails">
        {this
          .props
          .tDataProp
          .map((ship, index) => {
            return (<Ship
              name={ship.name}
              speed={ship.speed}
              minCrew={ship.minCrew}
              length={ship.length}
              passengers={ship.passengers}/>)
          })}
      </tbody>
    )
    return (
      <div class="animate-bottom">
        <table id="shipTable">
          <h2>Ships</h2>
          <table>
            <thead>
              <th>Name</th>
              <th>Speed</th>
              <th>Minimum Crew</th>
              <th>Length</th>
              <th>Passengers</th>
            </thead>
            {ships}
          </table>
        </table>
      </div>
    );
  }
}
export default App;
