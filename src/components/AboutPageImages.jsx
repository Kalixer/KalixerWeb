import React from 'react';
import '@styles/AboutPageImages.scss'


const foto1 = 'https://images.pexels.com/photos/2565919/pexels-photo-2565919.jpeg'
const foto2 = 'https://images.pexels.com/photos/1029577/pexels-photo-1029577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'


const AboutPageImages = () => {
    return (
        <div className='AboutPage_images'>
            <figure className='image1'>
                <img src={foto1} alt="" />
            </figure>
            <div className='quote_and_image'>
                <div className='quote'>
                    <p>"The only way to know what the future will be like is to build it."</p>
                </div>
                <figure className='image2'>
                    <img src={foto2} alt="" />
                </figure>
            </div>
        </div>
    )
}

export default AboutPageImages;