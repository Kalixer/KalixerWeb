import React from 'react';
import { Link } from 'react-router-dom';
import scrollToTop from '@utils/scrollToTop';
import { MyContext } from '../hooks/useContext';
import '@styles/BlogEntry.scss';

const loremTest = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae exercitationem ipsa illo vero hic reiciendis nemo eaque adipisci. Impedit nisi praesentium, velit minima blanditiis assumenda obcaecati doloremque minus ea possimus?`


const Entry = (props) => {
    const { setBlogIndex } = React.useContext(MyContext)

	let link = `/${props.link}`

	const showIndex = () => {
		setBlogIndex(props.index)
	}
	
	return (
		<div className='BlogEntry' onClick={showIndex}>
			{/* <Link to={link} onClick={scrollToTop}> */}
			<Link to='/blogTest' onClick={scrollToTop}>
				<figure className='imagen'>
					<img src={props.image} alt="" />
				</figure>
			</Link>
			<div className='entry-content'>
				<h1 className='entry-titles'>{props.title}</h1>
				<p>{loremTest}</p>
			</div>
		</div>
	)
}

export default Entry;