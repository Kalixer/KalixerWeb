import React from "react";

import '@styles/Portfolio.scss';

const Portfolio = () => {
    const dice_img = 'https://kalixer.github.io/Dice-roller/8931a087718e7f89f6ba.jpg'
    const html_draw = 'https://images.pexels.com/photos/925711/pexels-photo-925711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    const kalixtore = 'https://images.pexels.com/photos/1727684/pexels-photo-1727684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

    const dice_description = `I love board games. Who doesn't? Here you can choose how many dices do you want to throw and, if you choose the 'Role' dices, you can choose how many sides you want them to have. You also can change the language if you want (only English and Spanish available for now).`
    const html_draw_decription = `This is one of my first projects. I mean, this is one of the first things I learned when I started to learn to code. Here you can choose the colors you want to display and the website does the default drawing progressively.`
    const kalixtore_description = `Well, this is the proyect I made when I took the 'Practical NextJS course on Platzi. It's an E-commerce, but only the Front-End part. Now there's an problem with the API so the pictures doesn't load, but I'll work on it.`

    return (
        <div className="portfolio">
            <h1>Portfolio</h1>
            <div className="projects">

                <div className="project">
                    <div className="title">
                        <div className="parent-position">
                            <p>Dice Roller</p>
                        </div>
                        <img src={dice_img} alt="" />
                    </div>
                    <div className="description">
                        <p>{dice_description}</p>
                    </div>
                </div>

                <div className="project">
                <div className="title">
                        <div className="parent-position">
                            <p>Html Draw</p>
                        </div>
                        <img src={html_draw} alt="" />
                    </div>
                    <div className="description">
                        <p>{html_draw_decription}</p>
                    </div>
                </div>
                
                <div className="project">
                <div className="title">
                        <div className="parent-position">
                            <p>Kalixtore</p>
                        </div>
                        <img src={kalixtore} alt="" />
                    </div>
                    <div className="description">
                        <p>{kalixtore_description}</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Portfolio;