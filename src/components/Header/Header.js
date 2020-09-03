import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <h3 className='header__main'>Five Takeaways</h3>
      <nav className='header__nav'>
        <NavLink
          exact
          className='header__link'
          activeStyle={{ color: 'grey' }}
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          className='header__link'
          activeStyle={{ color: 'grey' }}
          to='/about'
        >
          About
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
