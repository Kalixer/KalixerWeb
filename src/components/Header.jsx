import React, { useState } from "react";
import { Link } from "react-router-dom";
import '@styles/Header.scss';

import scrollToTop from "@utils/scrollToTop";

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

        if (displayStatus == 'none') {
            setheaderSize(`100vh`)
            setdisplayStatus('flex')
        } else {
            setheaderSize(`8vh`)
            setdisplayStatus('none')
        }
        console.log("toggle")
    
    }
    const unToggle = () => {
        if (displayStatus != 'none'){
            setheaderSize(`8vh`)
            setdisplayStatus('none')
        }
        console.log("unToggle")
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
                <div className="name">
                    <Link to='/' onClick={unToggle}><p onClick={scrollToTop}>Kalixer</p></Link>
                </div>
                <ul className="nav-bar">
                    <li><Link to='/about' onClick={scrollToTop}>About</Link></li>
                    <li><Link to='/blog' onClick={scrollToTop}>Blog</Link></li>
                    <li><Link to='/books' onClick={scrollToTop}>Books</Link></li>
                    <li><Link to ='/portfolio' onClick={scrollToTop}>Portfolio</Link></li>
                    <li>Contact</li>
                </ul>

                <div 
                className="contact-responsive" 
                // onMouseOver={setTaupe} 
                // onMouseLeave={setWhite}
                >
                    {colorIcon}
                </div>
            </div>
            <div className="bottom-section"
            style={{display: `${displayStatus}`}}
            >
                <div className="bottom-nav-box" onClick={toggleMenu}><Link to='/about' onClick={scrollToTop}>About</Link></div>
                <div className="bottom-nav-box" onClick={toggleMenu}><Link to='/blog' onClick={scrollToTop}>Blog</Link></div>
                <div className="bottom-nav-box" onClick={toggleMenu}><Link to='/books' onClick={scrollToTop}>Books</Link></div>
                <div className="bottom-nav-box" onClick={toggleMenu}><Link to ='/portfolio' onClick={scrollToTop}>Portfolio</Link></div>
                <div className="bottom-nav-box" onClick={toggleMenu}>Contact</div>
            </div>
        </div>
    );
}

export default Header;