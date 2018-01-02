import React, {Component} from 'react';
import logo from './Redstarbird.png';
import './App.css';
import ReactDOM from 'react-dom';
import Ship from './Ship';

class App extends Component {
  constructor() {
    super();
    this.state = {
      objArray: [
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
      ],
      rowData: {
        nameData: "",
        speedData: "",
        minCrewData: "",
        lengthData: "",
        passengersData: ""
      }
    }

    this.handleSubmitInParent = (dataFromForm) => {
      let array = this.state.objArray;
      array.push({
        id: array.length,
        name: dataFromForm.nameData,
        speed: dataFromForm.speedData,
        minCrew: dataFromForm.minCrewData,
        length: dataFromForm.lengthData,
        passengers: dataFromForm.passengersData
      });
      this.setState({array});
    }

    this.handleDeleteRowInParent = (idToDelete) => {
      let array = this.state.objArray;
      let objIndex = array.findIndex((e) => e.id === idToDelete);
      array.splice(objIndex, 1);
      this.setState({objArray: array});
    }

    this.handleUpdateRowInParent = (idToUpdate, dataFromForm) => {
      let array = this.state.objArray;
      let objIndex = array.findIndex((e) => e.id === idToUpdate);
      let replacementObj = {
        id: idToUpdate,
        name: dataFromForm.nameData,
        speed: dataFromForm.speedData,
        minCrew: dataFromForm.minCrewData,
        length: dataFromForm.lengthData,
        passengers: dataFromForm.passengersData
      }
      array.splice(objIndex, 1);
      this.setState({objArray: array});
      //update api
    }

    this.handleGetRowData = (idToUpdate) => {
      let array = this.state.objArray;
      //get from api
      let objIndex = array.find((e) => e.id === idToUpdate);
      this.setState({rowData: objIndex});
    }
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Inputs parentHandle={this.handleSubmitInParent}/>
        <Table
          tDataProp={this.state.objArray}
          handleDeleteRowInParent={this.handleDeleteRowInParent} handleGetRowData={this.handleGetRowData}/>
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

  constructor(props) {
    super(props);

    //Each form component will call this method to update the state
    this.handleChange = (valueName) => (event) => this.setState({[valueName]: event.target.value});

    // Submit on the child form component will push all data in the state of the
    // child component up to the parent component
    this.handleSubmit = (e) => {
      e.preventDefault();
      this
        .props
        .parentHandle(this.state);
      this.setState({nameData: "", speedData: "", minCrewData: "", lengthData: "", passengersData: ""});
    }
    //Initialize state
    this.state = {
      nameData: "",
      speedData: "",
      minCrewData: "",
      lengthData: "",
      passengersData: ""
    };
  }

  render() {
    return (
      <div>
        <input
          id="inputShipName"
          type="text"
          placeholder="Enter a name"
          value={this.state.nameData}
          onChange={this.handleChange("nameData")}></input>
        <br></br>
        <input
          id="inputShipSpeed"
          type="number"
          placeholder="Enter a speed"
          value={this.state.speedData}
          onChange={this.handleChange("speedData")}></input>
        <br></br>
        <input
          id="inputShipCrew"
          type="number"
          placeholder="Enter minimum crew size"
          value={this.state.minCrewData}
          onChange={this.handleChange("minCrewData")}></input>
        <br></br>
        <input
          id="inputShipLength"
          type="number"
          placeholder="Enter ship length"
          value={this.state.lengthData}
          onChange={this.handleChange("lengthData")}></input>
        <br></br>
        <input
          id="inputShipPassengers"
          type="number"
          placeholder="Enter max number of passengers"
          value={this.state.passengersData}
          onChange={this.handleChange("passengersData")}></input>
        <br></br>
        <input type="button" onClick={this.handleSubmit} value="Create"></input>
        <input type="button" onClick="updateShip()" value="Update"></input>
        <br></br>
        <div id="idStore" value=""></div>
      </div>
    );
  };
}

class Table extends Component {
  constructor() {
    super();

    this.handleDeleteRow = (e) => {
      e.preventDefault();
      let eventAtID = e.target.value;
      this
        .props
        .handleDeleteRowInParent(eventAtID);
      //delete row with id that this event occurs at remove that data from the state
    }

    this.handleUpdateRow = (e) => {
      e.preventDefault();
      let eventAtID = e.target.value;
      this
        .props
        .handleGetRowData(eventAtID);
    }

  }
  render() {
    let ships = null;
    ships = (
      <tbody id="shipDetails">
        {this
          .props
          .tDataProp
          .map((ship, index) => {
            return (<Ship
              id={ship.id}
              name={ship.name}
              speed={ship.speed}
              minCrew={ship.minCrew}
              length={ship.length}
              passengers={ship.passengers}
              handleDeleteRow={this.handleDeleteRow}
              handleUpdateRow={this.handleUpdateRow}/>)
          })}
      </tbody>
    )
    return (
      <div class="animate-bottom">
        <table id="shipTable">
          <h2>Ships</h2>
          <table>
            <thead>
              <th>Delete</th>
              <th>Name</th>
              <th>Speed</th>
              <th>Minimum Crew</th>
              <th>Length</th>
              <th>Passengers</th>
              <th>Update</th>
            </thead>
            {ships}
          </table>
        </table>
      </div>
    );
  }
}

export default App;