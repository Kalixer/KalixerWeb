import React from 'react';

import '@styles/Entry.scss';


const loremTest = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae exercitationem ipsa illo vero hic reiciendis nemo eaque adipisci. Impedit nisi praesentium, velit minima blanditiis assumenda obcaecati doloremque minus ea possimus?`

const Entry = (props) => {
	const handleClick = () => {
		window.location.href = props.link
	}

	return (
		<div className='Entry'>
			<figure className='imagen' onClick={handleClick}>
				<img src={props.image} alt="" />
			</figure>
			<div className='entry-content'>
				<h1 className='entry-titles'>{props.title}</h1>
				<p>{loremTest}</p>
			</div>
		</div>
	)
}

export default Entry;