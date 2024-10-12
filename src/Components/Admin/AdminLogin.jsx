import React from 'react'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "../../Styles/AdminLogin.css";
const AdminLogin = () => {
    const email = useRef()
    const pass = useRef()
    const navigate =useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        const admindata = {
            email:"himan@gmail.com",
            password:"12345"
        }
        if (email.current.value == admindata.email && pass.current.value == admindata.password) {
            //Navigate to admin portal
            navigate("/adminPortal")
            console.log("Wellcome to AdminPage")
        } else {
            alert("invalid admin credentials")
        }
    }
  return (
    <div className='adminLogin'>
      <h1>Admin Login</h1>
      <div className="adminForm">
        <form onSubmit={handleSubmit}>
            <div className="adminEmail">
                <input type="email" ref={email} placeholder='Enter Your Email' />
            </div>
            <div className="adminPassword">
                <input type="password" ref={pass} placeholder='Enter Your Password' />
            </div>
            <div className="LoginBtn">
                <button>Login</button>
            </div>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin
