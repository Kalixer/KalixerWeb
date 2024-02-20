import React from 'react';
import { Link } from 'react-router-dom';
import scrollToTop from '../utils/scrollToTop'
import '@styles/AboutBoxes.scss';

const study_img = 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const exp_img = 'https://images.pexels.com/photos/109371/pexels-photo-109371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const hobbie_img = 'https://images.pexels.com/photos/117018/pexels-photo-117018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
const blog_img = 'https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'

const aboutBoxesArr = [
    {subject: 'studies', image: study_img, link: 'https://platzi.com/p/Kalixer72/', title: 'Studies', description: `For quite a time I've been studing Web development, English and I some of Python`},
    {subject: 'experiences', image: exp_img, link: '/portfolio', title: 'Experiences', description: `I have been testing my knowledge and building a few projects like: This website, Dice-Roller and Kalixtore.us`},
    {subject: 'hobbies', image: hobbie_img, link: '/hobbies', title: 'Hobbies', description: `Film appreciation, drawing, reading and playing some videogames are the things that I choose to do to relax and develop other areas of my interests`},
    {subject: 'blog', image: blog_img, link: '/blog', title: 'Blog', description: `Self-Understanding is quite a challenge, so I try sometimes to write down what I think to decrease my anxiety and record my thoughts`},
]

const AboutBoxes = () => {
    return (
        <div className='AboutBoxes'>

            {(aboutBoxesArr.map((box) => (
                <Link to={box.link} onClick={scrollToTop}>
                    <div className='box'>
                        <figure>
                            <img src={box.image} alt={box.title} />
                        </figure>
                        <div className='text'>
                            <h3>{box.title}</h3>
                            <p>{box.description}</p>
                        </div>
                    </div>
                </Link>
                ))
            )}

        </div>
    )
}

export default AboutBoxes;