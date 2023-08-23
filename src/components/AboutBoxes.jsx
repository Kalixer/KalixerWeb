import React from 'react';

import '@styles/AboutBoxes.scss';

import blogData from '@utils/blogData'

const study_img = 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const exp_img = 'https://images.pexels.com/photos/109371/pexels-photo-109371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const hobbie_img = 'https://images.pexels.com/photos/117018/pexels-photo-117018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const blog_img = 'https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

const AboutBoxes = () => {
    return (
        <div className='AboutBoxes'>
            <div className='box'>
                <figure>
                    <img src={study_img} alt="" />
                </figure>
                <div className='text'>
                    <h3>Studies</h3>
                    <p>For quite a time I've been studing Web development, English and I some of Python</p>
                </div>
            </div>
            <div className='box'>
                <figure>
                    <img src={exp_img} alt="" />
                </figure>
                <div className='text'>
                    <h3>Experiences</h3>
                    <p>I have been testing my knowledge and building a few projects like: This website, Dice-Roller and Kalixtore.us</p>
                </div>
            </div>
            <div className='box'>
                <figure>
                    <img src={hobbie_img} alt="" />
                </figure>
                <div className='text'>
                    <h3>Hobbies</h3>
                    <p>Film appreciation, drawing, reading and playing some videogames are the things that I choose to do to relax and develop other areas of my interests</p>
                </div>
            </div>
            <div className='box'>
                <figure>
                    <img src={blog_img} alt="" />
                </figure>
                <div className='text'>
                    <h3>Blog</h3>
                    <p>Self-Understanding is quite a challenge, so I try sometimes to write down what I think to decrease my anxiety and record my thoughts</p>
                </div>
            </div>
        </div>
    )
}

export default AboutBoxes;