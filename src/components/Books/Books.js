import React from 'react';
import { Link } from 'react-router-dom';
import LIST from './BookList';
import './Books.css';

const Books = () => {
  const items = LIST.map((book) => (
    <Link
      className='book-link'
      key={book.title}
      to={{ pathname: '/' + book.url, book: { details: book } }}
    >
      <div className='book-container' key={book.title}>
        <img
          className='book'
          src={process.env.PUBLIC_URL + '/images/books/' + book.url + '.jpg'}
          alt={book.title}
        />
        <div className='book-details'>
          {book.title} by {book.author}
        </div>
      </div>
    </Link>
  ));
  return (
    <div id='book-container'>
      <div id='book-list'>{items}</div>
    </div>
  );
};

export default Books;
