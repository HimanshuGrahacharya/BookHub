// import React from 'react'
// import '../../Styles/AddBooks.css';
// import { useRef } from 'react';
// const AddBooks = () => {
//   const title = useRef()
//   const turl = useRef()
//   const auth = useRef()
//   const cat = useRef()
//   const pc = useRef()

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     const bookdata = {
//       title: title.current.value,
//       thumbnailUrl: turl.current.value,
//       authors: auth.current.value,
//       pageCount: pc.current.value,
//       categories: cat.current.value,
//     }
//     console.log(bookdata)
//     fetch("http://localhost:4000/books"
//       , {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(bookdata)
//       })
//       alert('Book is added')
//   }

//   return (
//     <div className='addbook'>
//       <div className="contact-form">
//         <h2 className="contact-form-title">Add Book</h2>
//         <form onSubmit={handleSubmit}>
//           <div className='big-div b1'>
//             <label htmlFor="title" >Title</label><br />
//             <input type="text" ref={title} id='title' />
//           </div>
//           <div className='big-div b2'>
//             <div><label htmlFor="turl" >Thumbnail Url</label><br />
//               <input type="text" id='turl' ref={turl} /></div>
//             <div><label htmlFor="auth" >Author</label><br />
//               <input type="text" id='auth' ref={auth} /></div>
//           </div>
//           <div className='big-div b3'>
//             <div><label htmlFor="cat" >Category</label><br />
//               <input type="text" id='cat' ref={cat} /></div>
//             <div><label htmlFor="pc" >Page Count</label><br />
//               <input type="number" ref={pc} id='pc' /></div>
//           </div>
//           <div className='big-div'>
//             <button>Submit</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AddBooks


import React, { useRef } from 'react';
import '../../Styles/AddBooks.css';

const AddBooks = () => {
  const title = useRef();
  const turl = useRef();
  const auth = useRef();
  const cat = useRef();
  const pc = useRef();


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const bookdata = {
      title: title.current.value,
      thumbnailUrl: turl.current.value,
      authors: auth.current.value,
      pageCount: pc.current.value,
      categories: cat.current.value.split(',').map(item => item.trim()), // Split categories by comma
      
    };

    try {
      const response = await fetch("http://localhost:4000/books", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookdata),
      });

      if (!response.ok) {
        throw new Error('Failed to add the book');
      }

      alert('Book is added');
      // Optionally, clear the form inputs
      title.current.value = '';
      turl.current.value = '';
      auth.current.value = '';
      cat.current.value = '';
      pc.current.value = '';
      
    } catch (error) {
      console.error("Error:", error);
      alert('Error adding book. Please try again.');
    }
  };

  return (
    <div className='addbook'>
      <div className="contact-form">
        <h2 className="contact-form-title">Add Book</h2>
        <form onSubmit={handleSubmit}>
          <div className='big-div b1'>
            <label htmlFor="title">Title</label><br />
            <input type="text" ref={title} id='title' required />
          </div>
          <div className='big-div b2'>
            <div>
              <label htmlFor="turl">Thumbnail Url</label><br />
              <input type="text" id='turl' ref={turl} required />
            </div>
            <div>
              <label htmlFor="auth">Author</label><br />
              <input type="text" id='auth' ref={auth} required />
            </div>
          </div>
          <div className='big-div b3'>
            <div>
              <label htmlFor="cat">Category (comma-separated)</label><br />
              <input type="text" id='cat' ref={cat} required />
            </div>
            <div>
              <label htmlFor="pc">Page Count</label><br />
              <input type="number" ref={pc} id='pc' required />
            </div>
          </div>
         
          <div className='big-div'>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBooks;
