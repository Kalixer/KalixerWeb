import React from 'react';

import blogData from '@utils/blogData';

import '@styles/InDev.scss'

const InDevelopment = () => {
    
    const imagen = blogData[0].image
    
    // const pink_build = 'https://m.media-amazon.com/images/M/MV5BMjUwNTQ4Y2ItZjkxMi00YTc4LWJkMzktNDFmNTg4NWZmOGQyXkEyXkFqcGdeQXVyMTI0OTg2ODIx._V1_.jpg'
    const pink_build = 'https://i.pinimg.com/564x/07/5d/a5/075da577808faded2e854f7831e03a0f.jpg'

    return (
        <>
            <div className='InDev'>
                <figure>
                    <img src={pink_build} alt="" />
                </figure>
                <div className='message'>
                    <h1>This page is currently in Development</h1>
                    <h2>Soon we will have it operational</h2>
                </div>
            </div>
        </>
    )
}

export default InDevelopment;