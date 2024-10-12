import React from 'react'
import '../../Styles/Favourites.css';
const Favourites = ({ cart, setCart }) => {
    return (
        <div className='favBook'>
            <h1>Favourites</h1>
            {cart.map((data) => (
          <div className="book">
            <div className="img">
              <img src={data.thumbnailUrl} alt='' />
            </div>
            <div className="details">
              <p><span>Title : </span>{data.title}</p>
              <p><span>Written By : </span>{data.authors}</p>
              <p><span>Categories : </span>{data.categories}</p>
              <p><span>Pages : </span>{data.pageCount}</p>
            </div>
          </div>
        ))}
        </div>
    );
}

export default Favourites
