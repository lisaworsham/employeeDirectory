import React from 'react'

const TableRow = (props) => {
  return (
        <tr>
          <th scope="row">1</th>
          <td>{props.firstName}</td>
          <td>{props.lastName}</td>
          <td>{props.userName}</td>
        </tr>
  );
}

export default TableRow;