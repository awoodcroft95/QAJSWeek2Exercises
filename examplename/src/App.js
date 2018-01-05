import React, { Component } from 'react';
import './App.css';
import Inputs from './components/Inputs';
import Table from './components/Table';
import Footer from './components/Footer';
import Header from './components/Header';

const url = "http://192.168.1.118:3001/api/ship/";

class App extends Component {
  constructor() {
    super();
    this.state = {
      objArray: [],
      rowData: {
        nameData: "",
        speedData: "",
        minCrewData: "",
        lengthData: "",
        passengersData: "",
        id: ""
      },
      idOfEdit: -1
    }

    this.onSuccess = (response) => {
      return response.json();
    };
    this.onError = (error) => {
      console.log(error);
    };

    this.load = () => {
      fetch(url)
        .then((resp) => resp.json().then((data) => {
          this.setState({ objArray: data });
        }));
    }

    this.handleSubmitInParent = (dataFromForm) => {
      let array = this.state.objArray;
      let newObject = {
        id: array.length,
        name: dataFromForm.nameData,
        speed: dataFromForm.speedData,
        minCrew: dataFromForm.minCrewData,
        length: dataFromForm.lengthData,
        passengers: dataFromForm.passengersData
      };
      const request = new Request(url, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newObject)
      });
      return fetch(request).then(this.onSuccess, this.onError).then(this.load, this.forceUpdate);
    }

    this.handleDeleteRowInParent = (idToDelete) => {
      let array = this.state.objArray;
      let objIndex = array.findIndex((e) => e.id === idToDelete);
      array.splice(objIndex, 1);
      this.setState({ objArray: array });
      const request = new Request(url + idToDelete, {
        method: "DELETE"
      });
      return fetch(request).then(this.onSuccess, this.onError).then(this.load, this.forceUpdate);
    }

    this.handleUpdateRowInParent = (idToUpdate, dataFromForm) => {
      let replacementObj = {
        id: idToUpdate,
        name: dataFromForm.nameData,
        speed: dataFromForm.speedData,
        minCrew: dataFromForm.minCrewData,
        length: dataFromForm.lengthData,
        passengers: dataFromForm.passengersData
      }
      const request = new Request(url + idToUpdate, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(replacementObj)
      });
      return fetch(request).then(this.onSuccess, this.onError).then(this.load, this.forceUpdate);
    }

    this.handleGetRowData = (idToUpdate) => {
      this.setState({ idOfEdit: idToUpdate });
    }

    this.setRowData = (rowDataObj) => {
      this.setState({ rowData: rowDataObj })
    }
    this.resetID = () => {
      let id = { value: -1 }
      this.setState({ idOfEdit: id })
    }

  }
  componentDidMount() {
    this.load();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Inputs parentHandle={this.handleSubmitInParent} parentHandleUpdate={this.handleUpdateRowInParent} propRowData={this.state.rowData} setRowData={this.setRowData} id={this.state.idOfEdit} setID={this.resetID} />
        <Table
          tDataProp={this.state.objArray}
          handleDeleteRowInParent={this.handleDeleteRowInParent} handleGetRowData={this.handleGetRowData} />
        <Footer />
      </div>
    );
  }
}

export default App;