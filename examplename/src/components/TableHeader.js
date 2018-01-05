import React, { Component } from 'react';

class TableHeader extends Component {
    render() {
        return(
            <thead>
              <tr>
                <th>Delete</th>
                <th>Name</th>
                <th>Speed</th>
                <th>Minimum Crew</th>
                <th>Length</th>
                <th>Passengers</th>
                <th>Update</th>
                <th>ID</th>
              </tr>
            </thead>
        )
    }
}

export default TableHeader;