import React from 'react';
import AboutBoxes from '@components/AboutBoxes';
import '@styles/AboutEnd.scss';

const AboutEnd = () => {
    return (
        <div className='AboutEnd'>
            <div className='Title_Description'>
                <h1>Who I am?</h1>
                <p>These are the areas of my life, at least the ones that I don't mind sharing</p>
            </div>
            <AboutBoxes/>
        </div>
    )
}

export default AboutEnd;