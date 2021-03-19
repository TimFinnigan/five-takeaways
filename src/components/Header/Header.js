import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
	return (
		<div className='header'>
			<NavLink exact className='header__link' to='/'>
				<h3 className='header__main'>Five Takeaways</h3>
			</NavLink>
			<nav className='header__nav'>
				{/* <NavLink
					exact
					className='header__link'
					activeStyle={{ color: 'grey' }}
					to='/'
				>
					Home
				</NavLink> */}
				{/* <NavLink
          className='header__link'
          activeStyle={{ color: 'grey' }}
          to='/about'
        >
          About
        </NavLink> */}
				<a
					target='_blank'
					rel='noopener noreferrer'
					className='header__link'
					href='http://eepurl.com/htlJmf'
				>
					Subscribe
				</a>
			</nav>
		</div>
	);
};

export default Header;
