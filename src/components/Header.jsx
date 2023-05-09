import React from "react";
import '@styles/Header.scss';

const Header = () => {

    const contact = <img src="https://img.icons8.com/small/32/FFFFFF/user.png"/>
    
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

            <div className="contact-responsive">
                {contact}
            </div>
        </div>
    );
}

export default Header;