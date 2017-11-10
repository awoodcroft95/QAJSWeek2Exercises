import React from 'react';

const ship = (props) => {
    return (
            <tr>
                <td> <button value={props.id} class="deleteShip" onClick={props.handleDeleteRow}> X </button> </td>
                <td>{props.name}</td>
                <td>{props.speed}</td>
                <td>{props.minCrew}</td>
                <td>{props.length}</td>
                <td>{props.passengers}</td>
                <td> <button value={props.id} class="updateShip" onClick={props.handleUpdateRow}> U </button> </td>
            </tr>
    )
}

export default ship;