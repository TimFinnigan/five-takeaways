import React from 'react';
import Header from '../Header/Header';
import takeaways from './takeaways.json';

import './Details.css';

const Details = (props) => {
  const BOOK = props.match.params.book;
  let title = takeaways[BOOK].title;
  let description = takeaways[BOOK].description;
  let one = takeaways[BOOK].one;
  let oneText = takeaways[BOOK].oneText;
  let two = takeaways[BOOK].two;
  let twoText = takeaways[BOOK].twoText;
  let three = takeaways[BOOK].three;
  let threeText = takeaways[BOOK].threeText;
  let four = takeaways[BOOK].four;
  let fourText = takeaways[BOOK].fourText;
  let five = takeaways[BOOK].five;
  let fiveText = takeaways[BOOK].fiveText;

  return (
    <div>
      <Header />
      <div className='details'>
        <div className='details__title'>{title}</div>
        <div className='details__description'>{description}</div>
        <div className='details__list'>
          <div className='details__lesson'>
            <div className='details__lesson-header'>
              {'1) '}
              {one}
            </div>
            <div className='details__lesson-description'>{oneText}</div>
          </div>
          <div className='details__lesson'>
            <div className='details__lesson-header'>
              {'2) '}
              {two}
            </div>
            <div className='details__lesson-description'>{twoText}</div>
          </div>
          <div className='details__lesson'>
            <div className='details__lesson-header'>
              {'3) '}
              {three}
            </div>
            <div className='details__lesson-description'>{threeText}</div>
          </div>
          <div className='details__lesson'>
            <div className='details__lesson-header'>
              {'4) '}
              {four}
            </div>
            <div className='details__lesson-description'>{fourText}</div>
          </div>
          <div className='details__lesson'>
            <div className='details__lesson-header'>
              {'5) '}
              {five}
            </div>
            <div className='details__lesson-description'>{fiveText}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
