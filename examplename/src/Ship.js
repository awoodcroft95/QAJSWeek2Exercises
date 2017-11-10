import React from 'react';

const ship = (props) => {
    return (
            <tr>
                <td> <a href = "#" data-id={props.id} class="deleteShip"> X </a> </td>
                <td>{props.name}</td>
                <td>{props.speed}</td>
                <td>{props.minCrew}</td>
                <td>{props.length}</td>
                <td>{props.passengers}</td>
                <td> <a href = "#" data-id={props.id} class="updateShip"> U </a> </td>
            </tr>
    )
}

export default ship;