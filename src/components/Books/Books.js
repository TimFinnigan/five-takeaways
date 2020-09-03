import React from 'react';
import { Link } from 'react-router-dom';
import LIST from './BookList';
import './Books.css';

const Books = () => {
  const items = LIST.map((book) => (
    <Link
      className='books__link'
      key={book.title}
      to={{ pathname: '/' + book.url, book: { details: book } }}
    >
      <div className='books__container' key={book.title}>
        <img
          className='books__cover'
          src={process.env.PUBLIC_URL + '/images/books/' + book.url + '.jpg'}
          alt={book.title}
        />
        <div className='books__details'>
          {book.title} by {book.author}
        </div>
      </div>
    </Link>
  ));

  return (
    <div className='books'>
      <div className='books__list'>{items}</div>
    </div>
  );
};

export default Books;
