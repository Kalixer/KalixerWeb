import React from "react";
import BlogEntry from "@components/BlogEntry";

import blogData from '@utils/blogData';
import randomRange from '@utils/randomRange';

import '@styles/MoreRead.scss';

const MoreRead = (props) => {
    let randomBlog1
    let randomBlog2
    let assigned = false;

    // This funtcion is to assign the blogs at random, and is made so the blogs selected are not the same.
    while(!assigned) {
        randomBlog1 = randomRange(0, blogData.length - 1)
        randomBlog2 = randomRange(0, blogData.length - 1)

        // This if is to avoid selecting the current blog page
        if(randomBlog1 != props.current && randomBlog2 != props.current) {
            if(randomBlog2 == randomBlog1) {
                assigned = false
            } else {
                assigned = true
            }
        }
    }
    return(
        <div className='more-read'>
            <h1>Wanna read more?</h1>
            <div className='entry-by-two'>
                <BlogEntry 
                title={blogData[randomBlog1].title}
                image={blogData[randomBlog1].image}
                link={blogData[randomBlog1].link}
                />
                <BlogEntry
                title={blogData[randomBlog2].title}
                image={blogData[randomBlog2].image}
                link={blogData[randomBlog2].link}
                />
            </div>
        </div>
    )
};


export default MoreRead;