import React from 'react';

const ship = (props) => {
    const {handleDeleteRow, handleUpdateRow} = props;
    return (
            <tr>
                <td> <button value={props.id} className="deleteShip" onClick={handleDeleteRow}> X </button> </td>
                <td>{props.name}</td>
                <td>{props.speed}</td>
                <td>{props.minCrew}</td>
                <td>{props.length}</td>
                <td>{props.passengers}</td>
                <td> <button value={props.id} className="updateShip" onClick={handleUpdateRow}> U </button> </td>
            </tr>
    )
}

export default ship;