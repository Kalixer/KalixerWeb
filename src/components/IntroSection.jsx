import React from 'react';
import '@styles/IntroSection.scss';
import fondo from '@assets/background_laptop_cut.jpg'

const IntroSection = () => {
    return (
        <div className='IntroSection'>
            <figure className='IntroImagen'>
                <img src={fondo} alt="" />
            </figure>
        </div>
    )
}

export default IntroSection;