import React, { useEffect, useState } from "react";
import InputGroup from "../compts/InputGroup";
import RowDetails from "../compts/RowDetails";
import axios from 'axios'
import { set } from 'mongoose';

 export default function Home() {
  const [users, setUsers] = useState([])
  useEffect(() => {

     axios.get("/api/users")
    .then((res)=>{setUsers(res.data);})
  },[]);

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
              {
                users.map(({Email,Lastname,Firstname,Age,_id})=>{
                  <RowDetails Email={Email}  Lastname={Lastname}   Firstname={Firstname}   Age={Age}   Id={_id}  />
                })
              }
              
            </tbody>
          </table>
        </div>
      </div>
    </body>
  );
}
