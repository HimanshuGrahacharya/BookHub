import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/LandingPage.css';
const LandingPage = () => {
  return (
    <div className='landingPage'>
      <h1 style={{color:'blue'}}>BOOK 📕 HUB</h1>
       <div className="loginOption">
        <Link to="/adminLogin"><button>Admin Login</button></Link> <br />
        <Link to="/userLogin"><button>User Login</button></Link>
       </div>
    </div>
  );
}

export default LandingPage
