import React from 'react';
import LIST from './BookList';

const Books = () => {
  const items = LIST.map((book) => (
    <li key={book.title}>
      <span>{book.title}</span>
      <span>{book.author}</span>
    </li>
  ));
  return (
    <div id='book-container'>
      <div id='book-list'>{items}</div>
    </div>
  );
};

export default Books;
