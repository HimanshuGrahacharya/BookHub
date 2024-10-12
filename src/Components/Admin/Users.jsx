import React from 'react'
import { useEffect, useState } from 'react';
import '../../Styles/User.css';
const Users = () => {
  const [user, setUser] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/users")
      const rdata = await response.json()
      setUser(rdata)
      console.log(user)
    }
    fetchData()
  }, [user])
  const handleDelete=(id)=>{
     fetch(`http://localhost:4000/users/${id}`, {
      method:'DELETE'
     })
  }
  return (
    <div className='userList'>
      <b>Users</b>
      <div className="users">
        {
        user.map((data)=>(
          <div className="user">
              <div className="udetails">
              <h1><span>ID : </span>{data.id}</h1>
              <h2><span>Name : </span>{data.firstname} {data.lastname}</h2>
              <p><span>Email : </span>{data.email}</p>
              <p><span>Phone number : </span>{data.phone}</p>
              </div>
              <div className="ubtn">
                <button onClick={()=>{handleDelete(data.id)}}>Delete</button>
              </div>
            </div>
        ))
        }
      </div>
    </div>
  );
}

export default Users
