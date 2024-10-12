import React from 'react'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Styles/UserLogin.css';
const UserLogin = () => {
    const email = useRef()
    const pass = useRef()
    const gotouserportal = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        gotouserportal("/userPortal")

        
    }
    return (
        <div>
            <div className='userLogin'>
                <h1>User Login</h1>
                <div className="userForm">
                    <form onSubmit={handleSubmit}>
                        <div className="userEmail">
                            <input type="email" ref={email} placeholder='Enter Your Email' />
                        </div>
                        <div className="userPassword">
                            <input type="password" ref={pass} placeholder='Enter Your Password' />
                        </div>
                        <div className="LoginBtn">
                            <button>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UserLogin
