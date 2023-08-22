import React from 'react';
import IntroSection from '@components/IntroSection';
import Welcome from '@components/Welcome';
import AboutPageImages from '@components/AboutPageImages';

import '@styles/AboutPage.scss'
import HomeAbout from '@components/HomeAbout';
import WhatDoIDo from '../components/WhatDoIDo';

const About = () => {
    return (
        <div className='AboutPage'>
            <Welcome/>
            <section className='content'>
                <HomeAbout/>
                <AboutPageImages/>
                <WhatDoIDo/>
            </section>
        </div>
    )   
}

export default About;