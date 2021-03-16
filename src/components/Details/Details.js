import React from 'react';
import Header from '../Header/Header';
import takeaways from './takeaways.json';

import './Details.css';

const Details = (props) => {
	let book = props.match.params.book;
	let info = takeaways[book];

	return (
		<div>
			<Header />
			<div className='details'>
				<div className='details__title'>{info.title}</div>
				<img
					className='details__book-cover'
					src={
						process.env.PUBLIC_URL +
						'/images/books/' +
						book +
						'.jpg'
					}
					alt={book}
				/>
				<img
					className='details__amazon-button'
					src={process.env.PUBLIC_URL + '/images/buy-from-amazon.png'}
					alt={'Buy from Amazon'}
				/>
				<div className='details__description'>{info.description}</div>
				<div className='details__list'>
					<div className='details__takeaway'>
						<div className='details__takeaway-lesson'>
							{'1) '}
							{info.one.lesson}
						</div>
						<div className='details__takeaway-quote'>
							{info.one.quote}
						</div>
						<div className='details__takeaway-text'>
							{info.one.text}
						</div>
					</div>
					<div className='details__takeaway'>
						<div className='details__takeaway-lesson'>
							{'2) '}
							{info.two.lesson}
						</div>
						<div className='details__takeaway-quote'>
							{info.two.quote}
						</div>
						<div className='details__takeaway-text'>
							{info.two.text}
						</div>
					</div>
					<div className='details__takeaway'>
						<div className='details__takeaway-lesson'>
							{'3) '}
							{info.three.lesson}
						</div>
						<div className='details__takeaway-quote'>
							{info.three.quote}
						</div>
						<div className='details__takeaway-text'>
							{info.three.text}
						</div>
					</div>
					<div className='details__takeaway'>
						<div className='details__takeaway-lesson'>
							{'4) '}
							{info.four.lesson}
						</div>
						<div className='details__takeaway-quote'>
							{info.four.quote}
						</div>
						<div className='details__takeaway-text'>
							{info.four.text}
						</div>
					</div>
					<div className='details__takeaway'>
						<div className='details__takeaway-lesson'>
							{'5) '}
							{info.five.lesson}
						</div>
						<div className='details__takeaway-quote'>
							{info.five.quote}
						</div>
						<div className='details__takeaway-text'>
							{info.five.text}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Details;
