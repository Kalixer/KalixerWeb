import React from 'react';
import '@styles/IntroSection.scss';
import fondo from '@assets/background_laptop_cut.jpg'

const IntroSection = ({backgroundImg = fondo}) => {
    return (
        <div className='IntroSection'>
            <figure className='IntroImagen'>
                <img src={backgroundImg} alt="" />
            </figure>
        </div>
    )
}

export default IntroSection;