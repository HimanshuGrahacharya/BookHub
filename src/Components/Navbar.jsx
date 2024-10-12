import React from 'react'
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css'
import { useLocation } from 'react-router-dom';
const Navbar = () => {
    const location = useLocation()
    const option = location.pathname.startsWith('/adminPortal')
    return (
        <div className='navbar'>
            <div className="logo">
                <h1 style={{color:'blue'}}>BOOK📕📖 HUB</h1>
            </div>
            <div className="links">{
                option ?
                    <>
                        <Link to="/adminPortal/"><button>Home</button></Link>
                        <Link to="/adminPortal/books"><button>Books</button></Link>
                        <Link to="/adminPortal/users"><button>Users</button></Link>
                        <Link to="/adminPortal/addBook"><button>Add Books</button></Link>
                        <Link to="/adminPortal/addUser"><button>Add Users</button></Link>
                        <Link to="/adminLogin"><button>Logout</button></Link>
                    </>
                    :
                    <div style={{ height: "auto", width: "100%", display: "flex", justifyContent: "space-between", margin: "10px", marginLeft: "50%" }}>
                        <Link to="/userPortal/"><button>Home</button></Link>
                        <Link to="/userPortal/books"><button>Books</button></Link>
                        <Link to="/userPortal/Favourites"><button>Favourites</button></Link>
                        <Link to="/userLogin"><button>Logout</button></Link>
                    </div>
            }
            </div>
        </div>
    );
}

export default Navbar
