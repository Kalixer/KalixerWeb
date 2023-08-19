import React from 'react';
import IntroSection from '@components/IntroSection';
import Welcome from '@components/Welcome';

import '@styles/AboutPage.scss'
import HomeAbout from '@components/HomeAbout';

const About = () => {
    return (
        <div className='AboutPage'>
            <Welcome/>
            <section className='content'>
                <HomeAbout/>
                
            </section>
        </div>
    )   
}

export default About;