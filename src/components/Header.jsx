import React, { useState } from "react";
import '@styles/Header.scss';

const contact_white = <img src="https://img.icons8.com/small/32/FFFFFF/user.png"/>
const contact_taupe = <img src="https://img.icons8.com/small/32/988780/user.png"/>

const Header = () => {
    let overContact = false; // This is for when you place the mouse over the contact icon
    
    const [colorIcon, setcolorIcon] = useState(contact_white)

    const setTaupe = () => {
        setcolorIcon(contact_taupe)
    }
    const setWhite = () => {
        setcolorIcon(contact_white)
    }

    return (
        <div className="header">
            <button className="menu-responsive">
                <div></div>
                <div></div>
                <div></div>
            </button>
            <div className="name">
                <p>Kalixer</p>
            </div>
            <ul className="nav-bar">
                <li>About</li>
                <li>Blog</li>
                <li>Books</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>

            <div className="contact-responsive" onMouseOver={setTaupe} onMouseLeave={setWhite}>
                {colorIcon}
            </div>
        </div>
    );
}

export default Header;