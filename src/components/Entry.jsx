import React from 'react';

import '@styles/Entry.scss';

const Entry = () => {
	const imagenTest = `https://www.research4life.org/wp-content/uploads/2020/05/AdobeStock_162765779_2x1.jpg`
	return (
		<div className='Entry'>
			<figure className='imagen'>
				<img src={imagenTest} alt="" />
			</figure>
			<div className='entry-content'></div>
		</div>
	)
}

export default Entry;