import React from 'react';
import IntroSection from '@components/IntroSection';
import Welcome from '@components/Welcome';

import '@styles/AboutPage.scss'
import HomeAbout from '@components/HomeAbout';

const aboutDescription = `An introduction about myself`



const About = () => {
    return (
        <div className='AboutPage'>
            <Welcome/>
            {/* <div className='title'>
                <h1>Hello About</h1>
                <p>{aboutDescription}</p>
            </div> */}
            <section className='content'>
                <HomeAbout/>
            </section>
        </div>
    )   
}

export default About;