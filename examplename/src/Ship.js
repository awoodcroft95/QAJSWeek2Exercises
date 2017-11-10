import React from 'react';

const ship = (props) => {
    return (
            <tr>
                <td>{props.name}</td>
                <td>{props.speed}</td>
                <td>{props.minCrew}</td>
                <td>{props.length}</td>
                <td>{props.passengers}</td>
            </tr>
    )
}

export default ship;