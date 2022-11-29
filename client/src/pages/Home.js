import React, { useEffect, useState } from "react";
import InputGroup from "../compts/InputGroup";
import RowDetails from "../compts/RowDetails";
import axios from 'axios'
import { set } from 'mongoose';

 export default function Home() {
  const [users, setUsers] = useState([])
 const [form , setForm] = useState()

  const onChangeHandler = (e)=>{
    setForm({
        ...form,
        [e.target.name]: e.target.value,


    })
  }

  const onSubmitHandler = (e)=>{
    e.preventdefault();   // stop the data from shown in the url 
    axios.post('/api/users', form) //send to the post api a form 
    .then(res=>{
      alert(res.data.message)
    })
  }

  /* find all users  */
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
            <InputGroup label="Email" type="text" name="Email"onChangeHandler={onChangeHandler}/>
            <InputGroup label="Lastname" type="text" name="Lastname" onChangeHandler={onChangeHandler}/>
            <InputGroup label="Firstname" type="text" name="Firstname" onChangeHandler={onChangeHandler}/>
            <InputGroup label="Age " type="text" name="Age" onChangeHandler={onChangeHandler}/>

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
                 return <RowDetails Email={Email}  Lastname={Lastname}   Firstname={Firstname}   Age={Age}   Id={_id}  />
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </body>
  );
}
