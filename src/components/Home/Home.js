import React from 'react';
import Header from '../Header/Header';
import Subheader from '../Subheader/Subheader';
import Books from '../Books/Books';

const Home = () => {
	return (
		<div>
			<Header />
			<Subheader />
			<Books />
			<div className='about'>
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

export default Home;
