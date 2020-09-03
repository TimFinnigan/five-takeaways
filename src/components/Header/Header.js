import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div id='header-container'>
      <h3 id='main-header'>Five Takeaways</h3>
      <nav id='main-nav'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </nav>
    </div>
  );
};

export default Header;
