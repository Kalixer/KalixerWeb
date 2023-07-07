import React from 'react';
import IntroSection from '@components/IntroSection';

import '@styles/AboutPage.scss'

const aboutDescription = `This is a section where I talk about myself`

const About = () => {
    return (
        <div className='AboutPage'>
            <IntroSection />
            <div className='title'>
                <h1>Hello About</h1>
                <p>{aboutDescription}</p>
            </div>
            <section className='content'>
                <div className='text'></div>
            </section>
        </div>
    )   
}

export default About;