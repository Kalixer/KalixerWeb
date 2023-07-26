import React, { useState } from "react";
import { Link } from "react-router-dom";
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
                    <Link to='/'><p>Kalixer</p></Link>
                </div>
                <ul className="nav-bar">
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/books'>Books</Link></li>
                    <li><Link to ='/portfolio'>Portfolio</Link></li>
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
                <div className="bottom-nav-box"><Link to='/about'>About</Link></div>
                <div className="bottom-nav-box"><Link to='/blog'>Blog</Link></div>
                <div className="bottom-nav-box"><Link to='/books'>Books</Link></div>
                <div className="bottom-nav-box"><Link to ='/portfolio'>Portfolio</Link></div>
                <div className="bottom-nav-box">Contact</div>
            </div>
        </div>
    );
}

export default Header;