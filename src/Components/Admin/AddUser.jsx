import React from 'react'
import '../../Styles/AddUser.css'
import { useRef } from 'react';
const AddUser = () => {
  const fn = useRef()
  const ln = useRef()
  const email = useRef()
  const no = useRef()
  const handleSubmit = (e) => {
    e.preventDefault()
    const userData = {
      firstname: fn.current.value,
      lastname: ln.current.value,
      email: email.current.value,
      phone: no.current.value
    }
    console.log(userData)
    fetch("http://localhost:4000/books", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    })
    alert(`${fn.current.value} is Added`)
  }
  return (
    <div className='adduser'>
      <div className="user-form">
        <h2>Add User</h2>
        <form onSubmit={handleSubmit} >
          <div className='big-div b2'>
            <div><label htmlFor="fn" >First Name</label><br />
              <input type="text" id='fn' ref={fn} /></div>
            <div><label htmlFor="ln" >Last Name</label><br />
              <input type="text" id='ln' ref={ln} /></div>
          </div>
          <div className='big-div b3'>
            <dir> <label htmlFor="email" >Email</label><br />
              <input type="email" id='email' ref={email} /></dir>
            <div> <label htmlFor="pn" >Phone Number</label><br />
              <input type="number" id='pn' ref={no} /></div>
          </div>
          <div className='big-div'>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUser
