import React from 'react'
import { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import '../Styles/SingleBookDetails.css'
const SingleBookDetails = ({ cart, setCart }) => {
  let [book, setBook] = useState([])
  let params = useParams()
  let bookid = params.id
  useEffect(() => {
    let fetchdata = async () => {
      let response = await fetch(`http://localhost:4000/books/${bookid}`)
      let data = await response.json()
      setBook(data)
    }
    fetchdata()
  })

  const location = useLocation()
  const paths = location.pathname.startsWith('/adminPortal')

  const handleFav = () => {
      setCart([...cart, book])
  }

  return (
    <div className='bookdetails'>
      <div className="data">
        <div className="bimg">
          <img src={book.thumbnailUrl} alt="" />
        </div>
        <div className="bdata">
          <div className="bdtext">
            <h1><span>Title :</span> {book.title}</h1>
            <div className="flow">
              <h1>Short Desc:</h1>
              <div className="flowsort">
                <p>{book.shortDescription}</p>
              </div>
              <h1>long Desc:</h1>
              <div className="flowlong">
                <p>{book.longDescription}</p>
              </div>
            </div>
          </div>
          <div className="bdbtn">
            {paths ?
              <Link to='/adminPortal/books'><button>Back</button></Link>
              :
              <>
                <Link to='/userPortal/books'><button>Back</button></Link>
                <Link to='/userPortal/Favourites'><button onClick={handleFav}>Add To Favourites</button></Link>
              </>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleBookDetails
