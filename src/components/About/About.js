import React from 'react';
import Header from '../Header/Header';

import './About.css';

const About = () => {
  return (
    <>
      <Header />
      <div class='about'>
        Created by{' '}
        <a
          href='http://timfinnigan.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          Tim Finnigan
        </a>
      </div>
    </>
  );
};

export default About;
