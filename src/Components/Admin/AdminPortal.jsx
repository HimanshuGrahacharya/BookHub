import React from 'react'
import "../../Styles/AdminPortal.css";
import Navbar from '../Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home';
import Books from '../Books';
import Users from './Users';
import AddBooks from './AddBooks';
import AddUser from './AddUser';
import '../../Styles/AdminPortal.css'
import SingleBookDetails from '../SingleBookDetails';
const AdminPortal = () => {
  return (
    <div className='adminPortal'>
      <Navbar className="navbar"/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Books/>} path='/books'/>
        <Route element={<Users/>} path='/users'/>
        <Route element={<AddBooks/>} path='/addBook'/>
        <Route element={<AddUser/>} path='/addUser'/> 
        <Route element={<SingleBookDetails/>} path='/books/:id'/> 
      </Routes>
    </div>
  );
}

export default AdminPortal
