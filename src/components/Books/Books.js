import React from 'react';
import LIST from './BookList';
import './Books.css';

const Books = () => {
  const items = LIST.map((book) => (
    <div className='book-container' key={book.title}>
      <img
        className='book'
        src={process.env.PUBLIC_URL + '/images/books/' + book.image}
        alt={book.title}
      />
      <div className='book-details'>
        {book.title} by {book.author}
      </div>
    </div>
  ));
  return (
    <div id='book-container'>
      <div id='book-list'>{items}</div>
    </div>
  );
};

export default Books;
