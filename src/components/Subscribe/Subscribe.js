import React from 'react';
import Header from '../Header/Header';

import './Subscribe.css';

const Subscribe = () => {
	return (
		<>
			<Header />
			<div className='subscribe'></div>
			<div className='subscribe__made-by'>
				Created by{' '}
				<a
					href='http://timfinnigan.com'
					target='_blank'
					rel='noopener noreferrer'
				>
					Tim Finnigan
				</a>
				.
			</div>
		</>
	);
};

export default Subscribe;
