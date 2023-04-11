import React from "react";
import '@styles/Header.scss';

const Header = () => {
    return (
        <div className="header">
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
        </div>
    );
}

export default Header;