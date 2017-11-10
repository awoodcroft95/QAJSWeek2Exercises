import React, {Component} from 'react';
import logo from './Redstarbird.png';
import './App.css';
import ReactDOM from 'react-dom';
import Ship from './Ship';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">STAR WARS SHIP API</h1>
        </header>
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
          <input type="button" onclick="createAndAppendDog()" value="Create"></input>
          <input type="button" onclick="updateAndAppendDog()" value="Update"></input>
          <br></br>
          <div id="idStore" value=""></div>
        </div>
        <Table tData={this.props.tData}/>
      </div>

    );
  }
}

class Table extends Component {
  render() {
    let ships = null;
    ships = (
      <tbody id="shipDetails">
        {this
          .props
          .tData
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
