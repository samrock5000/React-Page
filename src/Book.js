import React from 'react'

const Book = ({img, title, author, pages}) => {
    const clickHander = () => {
      alert("Hello")
    }
    return (
      <article className='book' >
        <img src={img} alt="" />
        <h1>{title}</h1>
        <h4>Author: {author}</h4>
        <h5>Pages: {pages}</h5>
        <button type='button' onClick={clickHander}>
          Click Me
        </button>
      
      </article>
    );
   
};

export default Book