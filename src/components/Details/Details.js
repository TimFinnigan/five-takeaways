import React from 'react';
import Header from '../Header/Header';
import takeaways from './takeaways.json';

const Details = (props) => {
  console.log(props.match.params.book);
  return (
    <div>
      <Header />
      {JSON.stringify(takeaways)}
      <span>Hello from Details component</span>
    </div>
  );
};

export default Details;
