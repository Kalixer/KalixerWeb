import React from 'react';
import blogData from '@utils/blogData';
import MoreRead from '@components/MoreRead';
import { MyContext } from '../hooks/useContext';

import '@styles/BlogRead.scss';

const text1 = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur eum optio, at non voluptate hic voluptates deleniti obcaecati harum. Qui eius voluptate, nemo voluptatum soluta sed praesentium iure maiores quibusdam!`

const BlogRead = () => {
    const {blogIndex} = React.useContext(MyContext)

    return (
        <div className='BlogRead'>
            <figure className='BlogImage'>
                <img src={blogData[blogIndex].image} alt="" />
            </figure>
            <div className='Title'>
                <h1>{blogData[blogIndex].title}</h1>
            </div>
            <div className='blog-content'>
                <p>{text1}</p>
                <p>{text1}</p>
                <p>{text1}</p>
                <p>{text1}</p>
                <p>{text1}</p>
                <p>{text1}</p>
            </div>
            <MoreRead current={blogIndex}/>
        </div>
    )
}

export default BlogRead;