import React from 'react'

function RowDetails({Email,Lastname,Firstname,Age,Id}) {
  return (
    <tr>
    <th>{Email}</th>
    <td>{Lastname}</td>
    <td>{Firstname}</td>
    <td>{Age}</td>
    <td className="gap__actions">
      <span className="badge bg-info">
        <a href="/id" className="text-white">
          <i className="fas fa-edit"></i>
        </a>
      </span>

      <span className="badge bg-danger" onClick="">
        <i className="fas fa-trash-alt"></i>
      </span>
    </td> 
  </tr>  )


}
 export default RowDetails