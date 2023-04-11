import React from "react";

import background from '@assets/background_laptop_cut.jpg'
import '@styles/Welcome.scss'

const Welcome = () => {
    return (
        <div className="welcome">
            <img src={background} alt="" />
            <h1>Hello there</h1>
        </div>
    );
}

export default Welcome;