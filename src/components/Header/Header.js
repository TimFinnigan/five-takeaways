import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div id='header-container'>
      <h3 id='main-header'>Five Takeaways</h3>
      <nav id='main-nav'>
        <NavLink exact class='nav-link' activeStyle={{ color: 'grey' }} to='/'>
          Home
        </NavLink>
        <NavLink class='nav-link' activeStyle={{ color: 'grey' }} to='/about'>
          About
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
