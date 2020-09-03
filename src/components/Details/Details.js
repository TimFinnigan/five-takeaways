import React from 'react';
import Header from '../Header/Header';
import takeaways from './takeaways.json';

import './Details.css';

const Details = (props) => {
  const BOOK = props.match.params.book;
  let description = takeaways[BOOK].description;
  let one = takeaways[BOOK].one;
  let two = takeaways[BOOK].two;
  let three = takeaways[BOOK].three;
  let four = takeaways[BOOK].four;
  let five = takeaways[BOOK].five;

  return (
    <div>
      <Header />
      <div id='book-container'>
        <div id='book-description'>{description}</div>
        <div id='lesson-container'>
          <div className='lesson'>{one}</div>
          <div className='lesson'>{two}</div>
          <div className='lesson'>{three}</div>
          <div className='lesson'>{four}</div>
          <div className='lesson'>{five}</div>
        </div>
      </div>
    </div>
  );
};

export default Details;
