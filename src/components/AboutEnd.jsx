import React from 'react';
import AboutBoxes from '@components/AboutBoxes';
import '@styles/AboutEnd.scss';

const AboutEnd = () => {
    return (
        <div className='AboutEnd'>
            <div className='Title_Description'>
                <h1>Title</h1>
                <p>Description</p>
            </div>
            <AboutBoxes/>
        </div>
    )
}

export default AboutEnd;