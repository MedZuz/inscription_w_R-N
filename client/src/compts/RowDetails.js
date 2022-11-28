import React from 'react'

function RowDetails() {
  return (
    <tr>
    <th>mansouri@live.fr</th>
    <td>mansouri</td>
    <td>youssef</td>
    <td>29</td>
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