import React from 'react';
import Header from '../Header/Header';
import takeaways from './takeaways.json';

const Details = (props) => {
  const BOOK = props.match.params.book;
  console.log(takeaways[BOOK].description);
  let description = takeaways[BOOK].description;
  return (
    <div>
      <Header />
      {description}
    </div>
  );
};

export default Details;
