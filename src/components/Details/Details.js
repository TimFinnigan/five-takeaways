import React from 'react';
import Header from '../Header/Header';
import takeaways from './takeaways.json';

import './Details.css';

const Details = (props) => {
  const BOOK = props.match.params.book;
  let title = takeaways[BOOK].title;
  let description = takeaways[BOOK].description;
  let one = takeaways[BOOK].one;
  let two = takeaways[BOOK].two;
  let three = takeaways[BOOK].three;
  let four = takeaways[BOOK].four;
  let five = takeaways[BOOK].five;

  return (
    <div>
      <Header />
      <div className='details'>
        <div className='details__title'>{title}</div>
        <div className='details__description'>{description}</div>
        <ul className='details__list'>
          <li className='lesson'>{one}</li>
          <li className='lesson'>{two}</li>
          <li className='lesson'>{three}</li>
          <li className='lesson'>{four}</li>
          <li className='lesson'>{five}</li>
        </ul>
      </div>
    </div>
  );
};

export default Details;
