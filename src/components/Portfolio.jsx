import React from "react";

import '@styles/Portfolio.scss';

const Portfolio = () => {
    const dice_img = 'https://kalixer.github.io/Dice-roller/8931a087718e7f89f6ba.jpg'
    const html_draw = 'https://images.pexels.com/photos/925711/pexels-photo-925711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    const kalixtore = 'https://images.pexels.com/photos/1727684/pexels-photo-1727684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

    const dice_description = `I love board games. Who doesn't? Here you can choose how many dices do you want to throw and, if you choose the 'Role' dices, you can choose how many sides you want them to have. You also can change the language if you want (only English and Spanish available for now).`
    const html_draw_decription = `This is one of my first projects. I mean, this is one of the first things I learned when I started to learn to code. Here you can choose the colors you want to display and the website does the default drawing progressively.`
    const kalixtore_description = `Kalixtore is an E-commerce proyect I made when I took the 'Practical NextJS course on Platzi. I used an API provided by the platform that made the course`

    const handleClickDiceRoller = () => { 
        window.open('https://kalixer.github.io/Dice-roller/', '_blank') 
    }
    const handleClickHtmlDraw = () => { window.open('https://kalixer.github.io/Drawing-in-Html/', '_blank') }
    const handleClickKalixtore = () => { window.open('https://www.kalixtore.us/', '_blank') }

    return (
        <div className="portfolio">
            <h1>Portfolio</h1>
            <div className="projects">

                <div className="project">
                    <div className="title">
                        <a href="#" onClick={handleClickDiceRoller}>
                            <div className="parent-position">
                                <p>Dice Roller</p>
                            </div>
                        </a>
                        <img src={dice_img} alt="" />
                    </div>
                    <div className="description">
                        <p>{dice_description}</p>
                    </div>
                </div>

                <div className="project">
                <div className="title">
                    <a href="#" onClick={handleClickHtmlDraw}>
                        <div className="parent-position">
                            <p>Html Draw</p>
                        </div>
                    </a>
                        <img src={html_draw} alt="" />
                    </div>
                    <div className="description">
                        <p>{html_draw_decription}</p>
                    </div>
                </div>
                
                <div className="project">
                <div className="title">
                    <a href="#" onClick={handleClickKalixtore}>
                        <div className="parent-position">
                            <p>Kalixtore</p>
                        </div>
                    </a>
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