import React, { useState } from "react";
import '@styles/Header.scss';

const contact_white = <img src="https://img.icons8.com/small/32/FFFFFF/user.png"/>
const contact_taupe = <img src="https://img.icons8.com/small/32/988780/user.png"/>

const Header = () => {    
    const [colorIcon, setcolorIcon] = useState(contact_white)
    const setTaupe = () => {
        setcolorIcon(contact_taupe)
    }
    const setWhite = () => {
        setcolorIcon(contact_white)
    }

    // let menuStatus = false;

    const [headerSize, setheaderSize] = useState(`8vh`)
    const [displayStatus, setdisplayStatus] = useState('none')

    const toggleMenu = () => {

        console.log(displayStatus)

        if (displayStatus == 'none') {
            setheaderSize(`100vh`)
            setdisplayStatus('flex')
        } else {
            setheaderSize(`8vh`)
            setdisplayStatus('none')
        }
    
    }

    const handleKalixer = () => {
        window.location.href = '/'
    }
    const handleAbout = () => {
        window.location.href = '/about'
    }

    return (
        <div className="header" id="head"
        style={{height: `${headerSize}`}}
        >
            <div className="top-section">
                <button className="menu-responsive" 
                onClick={toggleMenu}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
                <div className="name" onClick={handleKalixer}>
                    <p>Kalixer</p>
                </div>
                <ul className="nav-bar">
                    <li onClick={handleAbout}>About</li>
                    <li>Blog</li>
                    <li>Books</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>

                <div 
                className="contact-responsive" 
                onMouseOver={setTaupe} 
                onMouseLeave={setWhite}
                >
                    {colorIcon}
                </div>
            </div>
            <div className="bottom-section"
            style={{display: `${displayStatus}`}}
            >
                <div className="bottom-nav-box">About</div>
                <div className="bottom-nav-box">Blog</div>
                <div className="bottom-nav-box">Books</div>
                <div className="bottom-nav-box">Portfolio</div>
                <div className="bottom-nav-box">Contact</div>
            </div>
        </div>
    );
}

export default Header;