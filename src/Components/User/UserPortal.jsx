import React, { useState } from 'react'
import Navbar from '../Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Books from '../Books';
import SingleBookDetails from '../SingleBookDetails';
import Favourites from './Favourites';

const UserPortal = () => {
  const [fav, setFav] = useState([])

  return (
    <div className='userPortal'>
      <Navbar />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Books />} path='/books' />
        <Route element={<SingleBookDetails cart={fav} setCart={setFav} />} path='/books/:id' />
        <Route element={<Favourites cart={fav} setCart={setFav} />} path='/Favourites' />
      </Routes>
    </div>
  );
}

export default UserPortal
