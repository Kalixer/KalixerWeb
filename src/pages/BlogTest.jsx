import React from 'react';

import Entry from '@components/Entry';

import '@styles/BlogTest.scss';

const text1 = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur eum optio, at non voluptate hic voluptates deleniti obcaecati harum. Qui eius voluptate, nemo voluptatum soluta sed praesentium iure maiores quibusdam!`

const BlogTest = () => {
    const linkImagen = `https://wallpapercave.com/wp/wp9745622.jpg`
    return (
        <div className='BlogTest'>
            <figure className='BlogImage'>
                <img src={linkImagen} alt="" />
            </figure>
            <div className='Title'>
                <h1>Epic Title</h1>
            </div>
            <div className='blog-content'>
                <p>{text1}</p>
                <p>{text1}</p>
                <p>{text1}</p>
                <p>{text1}</p>
                <p>{text1}</p>
                <p>{text1}</p>
            </div>
            <div className='more-read'>
                <h1>Wanna read more?</h1>
                <div className='entry-by-two'>
                    <Entry/>
                    <Entry/>
                </div>
            </div>
        </div>
    )
}

export default BlogTest;