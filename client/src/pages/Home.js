import React, { useEffect } from "react";
import InputGroup from "../compts/InputGroup";
import RowDetails   from "../compts/RowDetails";
import axios from "axios";
export default function Home() {

  

  return (
    <body>
      <div className="row p-4">
        <div className="mt-4">
          <h2>Crud Users</h2>
        </div>
        <div className="col-12 col-lg-4">
          <form>
            <InputGroup label="Email" type="text" name="Email" />
            <InputGroup label="Lastname" type="text" name="Lastname" />
            <InputGroup label="Firstname" type="text" name="Firstname" />
            <InputGroup label="Age " type="text" name="Age" />

            <button className="btn btn-primary">Add user</button>
          </form>
        </div>
        <div className="col-12 col-lg-7">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Email</th>
                <th scope="col">Lastname</th>
                <th scope="col">Firstname</th>
                <th scope="col">Age</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <RowDetails />
            </tbody>
          </table>
        </div>
      </div>
    </body>
  );
}
