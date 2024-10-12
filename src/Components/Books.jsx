// import React from 'react'
// import { useEffect, useState } from 'react';
// import '../Styles/Books.css'
// import { useNavigate, useLocation } from 'react-router-dom';
// import '../Styles/AdminPortal.css';
// const Books = () => {
//   const [books, setBooks] = useState([])
//   const bookDetails = useNavigate()
//   const location = useLocation()
//   const option = location.pathname.startsWith('/adminPortal')

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('http://localhost:4000/books')
//       const data = await response.json()
//       setBooks(data)
//     }
//     fetchData()
//   }, [books])

//   const readBook = (id) => {
//     option ? bookDetails(`/adminPortal/books/${id}`) : bookDetails(`/userPortal/books/${id}`)
//   }
//   const handleDelete = (id, title) => {
//     fetch(`http://localhost:4000/books/${id}`, {
//       method: "DELETE",
//     });
//     alert(`${title} got Deleted`)
//   }

//   return (
//     <div className='bookcollection'>
//       <h1>Books Collection</h1>
//       <div className="books">
//         {books.map((data) => (
//           <div className="book">
//             <div className="img">
//               <img src={data.thumbnailUrl} alt="" />
//             </div>
//             <div className="details">
//               <p><span>Title : </span>{data.title}</p>
//               <p><span>Written By : </span>{data.authors}</p>
//               <p><span>Categories : </span>{data.categories}</p>
//               <p><span>Pages : </span>{data.pageCount}</p>
//               <div className="btn">
//                 {option ? <>
//                   <button onClick={() => readBook(data.id)}>Read Book</button>
//                   <button onClick={() => { handleDelete(data.id, data.title) }}>Delete Book</button></>
//                   :
//                   <button onClick={() => readBook(data.id)}>Read Book</button>
//                 }
                
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Books;


import React, { useEffect, useState } from 'react';
import '../Styles/Books.css';
import { useNavigate, useLocation } from 'react-router-dom';
import '../Styles/AdminPortal.css';

const Books = () => {
  const [books, setBooks] = useState([]); // All books
  const [filteredBooks, setFilteredBooks] = useState([]); // Books filtered by search
  const [searchQuery, setSearchQuery] = useState(''); // Search input state
  const [selectedBook, setSelectedBook] = useState(null); // Book selected for updating
  const [editMode, setEditMode] = useState(false); // Track if we're in edit mode
  const bookDetails = useNavigate();
  const location = useLocation();
  const option = location.pathname.startsWith('/adminPortal');

  // Fetch books data on component load
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:4000/books');
      const data = await response.json();
      setBooks(data);
      setFilteredBooks(data); // Initially show all books
    };
    fetchData();
  }, []);

  // Filter books based on search query (case-insensitive for ID, title, and categories)
  useEffect(() => {
    const filtered = books.filter(book => 
      (book.title && book.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
      book.id.toString().includes(searchQuery) ||
      (Array.isArray(book.categories) && book.categories.join(', ').toLowerCase().includes(searchQuery.toLowerCase()))
    );
    setFilteredBooks(filtered);
  }, [searchQuery, books]);

  const readBook = (id) => {
    option ? bookDetails(`/adminPortal/books/${id}`) : bookDetails(`/userPortal/books/${id}`);
  };

  const handleDelete = (id, title) => {
    fetch(`http://localhost:4000/books/${id}`, {
      method: 'DELETE',
    });
    alert(`${title} got Deleted`);
    setBooks(books.filter(book => book.id !== id));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedBook = {
      ...selectedBook, // Spread the selected book object
    };

    await fetch(`http://localhost:4000/books/${selectedBook.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedBook),
    });

    alert('Book updated successfully!');
    setEditMode(false);
    setSelectedBook(null);

    // Optionally refetch the books or update the state directly
    const updatedBooks = books.map(book => book.id === updatedBook.id ? updatedBook : book);
    setBooks(updatedBooks);
  };

  const handleEditClick = (book) => {
    setSelectedBook(book); // Set the book to be edited
    setEditMode(true); // Enable edit mode
  };

  return (
    <div className='bookcollection'>
      <h1>Books Collection</h1>

      {/* Search bar */}
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search books by title, ID, or categories..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="clear-btn" onClick={() => setSearchQuery('')}>Clear</button>
      </div>

      {/* Conditional rendering for edit mode */}
      {editMode && selectedBook ? (
        <div className="edit-form">
          <h2>Edit Book</h2>
          <form onSubmit={handleUpdate}>
            <label>
              Title:
              <input
                type="text"
                value={selectedBook.title}
                onChange={(e) => setSelectedBook({ ...selectedBook, title: e.target.value })}
              />
            </label>
            <label>
              Authors:
              <input
                type="text"
                value={selectedBook.authors}
                onChange={(e) => setSelectedBook({ ...selectedBook, authors: e.target.value })}
              />
            </label>
            <label>
              Categories:
              <input
                type="text"
                value={selectedBook.categories.join(', ')}
                onChange={(e) => setSelectedBook({ ...selectedBook, categories: e.target.value.split(', ') })}
              />
            </label>
            <label>
              Page Count:
              <input
                type="number"
                value={selectedBook.pageCount}
                onChange={(e) => setSelectedBook({ ...selectedBook, pageCount: e.target.value })}
              />
            </label>
            <button type="submit">Save</button>
            <button type="button" onClick={() => setEditMode(false)}>Cancel</button>
          </form>
        </div>
      ) : (
        <div className="books">
          {filteredBooks.map((data) => (
            <div className="book" key={data.id}>
              <div className="img">
                <img src={data.thumbnailUrl} alt="" />
              </div>
              <div className="details">
                <p><span>ID: </span>{data.id}</p>
                <p><span>Title: </span>{data.title || 'No title available'}</p>
                <p><span>Written By: </span>{data.authors}</p>
                <p><span>Categories: </span>{Array.isArray(data.categories) ? data.categories.join(', ') : 'No categories available'}</p>
                <p><span>Pages: </span>{data.pageCount}</p>
                <div className="btn">
                  {option ? (
                    <>
                      <button onClick={() => readBook(data.id)}>Read Book</button>
                      <button onClick={() => handleDelete(data.id, data.title)}>Delete Book</button>
                      <button onClick={() => handleEditClick(data)}>Update Book</button> {/* Update button */}
                    </>
                  ) : (
                    <button onClick={() => readBook(data.id)}>Read Book</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Books;
