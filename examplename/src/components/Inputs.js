import React, { Component } from 'react';

class Inputs extends Component {

    constructor(props) {
      super(props);
      //Each form component will call this method to update the state
      this.handleChange = (valueName) => (event) => this.setState({ [valueName]: event.target.value });
  
      // Submit on the child form component will push all data in the state of the
      // child component up to the parent component
      this.handleSubmit = (e) => {
        e.preventDefault();
        this
          .props
          .parentHandle(this.state);
        const rowData = { nameData: "", speedData: "", minCrewData: "", lengthData: "", passengersData: "", id: "" };
        this.setState(rowData);
        this.forceUpdate();
      }
  
      this.handleUpdate = (e) => {
        e.preventDefault();
        this
          .props
          .parentHandleUpdate(this.props.id, this.state);
        console.log(this.props.id + "in handleUpdate");
        const rowData = { nameData: "", speedData: "", minCrewData: "", lengthData: "", passengersData: "", id: "" };
        this.setState(rowData);
        this.setState({ updateDisabled: true, createDisabled: false });
        this.forceUpdate();
      }
      //Initialize state
      this.state = {
        nameData: "",
        speedData: "",
        minCrewData: "",
        lengthData: "",
        passengersData: "",
        id: "",
        updateDisabled: true,
        createDisabled: false
      };
    }
    componentWillReceiveProps(nextProps) {
      if (nextProps.id > -1) {
        this.setState(this.props.propRowData);
        this.setState({ updateDisabled: false, createDisabled: true });
        this.forceUpdate();
      }
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
          <input type="button" onClick={this.handleSubmit} disabled={this.state.createDisabled} value="Create"></input>
          <input type="button" onClick={this.handleUpdate} disabled={this.state.updateDisabled} value="Update" id="updateButton"></input>
          <br></br>
          <div id="idStore" style={{ color: 'white' }} value={this.props.id}>ID: {this.props.id}</div>
        </div>
      );
    };
  }

  export default Inputs;