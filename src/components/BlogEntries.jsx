import React from 'react';
import BlogEntry from '@components/BlogEntry.jsx'
import blogData from '/src/utils/blogData';

import '@styles/BlogEntries.scss';


const BlogEntries = () => {
	return (
		<div className='BlogEntries'>
            <h1>Entries</h1>
            <div className='entries'>
                <div className='entry-by-three'>
                    <BlogEntry title={blogData[0].title} link={blogData[0].link} image={blogData[0].image} index={0}/>
                    <BlogEntry title={blogData[1].title} link={blogData[1].link} image={blogData[1].image} index={1}/>
                    <BlogEntry title={blogData[2].title} link={blogData[2].link} image={blogData[2].image} index={2}/>
                </div>
                <div className='entry-by-three'>
                    <BlogEntry title={blogData[3].title} link={blogData[3].link} image={blogData[3].image} index={3}/>
                    <BlogEntry title={blogData[4].title} link={blogData[4].link} image={blogData[4].image} index={4}/>
                    <BlogEntry title={blogData[5].title} link={blogData[5].link} image={blogData[5].image} index={5}/>
                </div>
            </div>
        </div>
	)
}

export default BlogEntries;
