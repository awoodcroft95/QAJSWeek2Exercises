import React, { Component } from 'react';
import Ship from './Ship';
import TableHeader from './TableHeader';

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
        console.log(eventAtID);
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
                key={index}
                id={ship.id}
                name={ship.name}
                speed={ship.speed}
                minCrew={ship.minCrew}
                length={ship.length}
                passengers={ship.passengers}
                handleDeleteRow={this.handleDeleteRow}
                handleUpdateRow={this.handleUpdateRow} />)
            })}
        </tbody>
      )
      return (
        <div className="animate-bottom">
          <h2>Ships</h2>
          <table id="shipTable">
            <TableHeader />
            {ships}
          </table>
        </div>
      );
    }
  }

  export default Table;