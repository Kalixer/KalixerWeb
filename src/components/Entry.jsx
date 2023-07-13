import React from 'react';

import '@styles/Entry.scss';


const imagenTest = `https://www.research4life.org/wp-content/uploads/2020/05/AdobeStock_162765779_2x1.jpg`
const loremTest = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae exercitationem ipsa illo vero hic reiciendis nemo eaque adipisci. Impedit nisi praesentium, velit minima blanditiis assumenda obcaecati doloremque minus ea possimus?`

const handleClick = () => {
	window.location.href = '/blog-test'
}

const Entry = () => {

	return (
		<div className='Entry' onClick={handleClick}>
			<figure className='imagen'>
				<img src={imagenTest} alt="" />
			</figure>
			<div className='entry-content'>
				<h1 className='entry-titles'>Epic Title</h1>
				<p>{loremTest}</p>
			</div>
		</div>
	)
}

export default Entry;