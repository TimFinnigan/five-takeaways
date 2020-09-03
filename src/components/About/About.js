import React from 'react';
import Header from '../Header/Header';

import './About.css';

const About = () => {
  return (
    <div>
      <Header />
      <div id='about-container'>
        Created by{' '}
        <a
          href='http://timfinnigan.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          Tim Finnigan
        </a>
      </div>
    </div>
  );
};

export default About;
