import React from "react";

import background from '@assets/background_laptop_cut.jpg'
import '@styles/Welcome.scss'

const Welcome = () => {
    return (
        <div className="welcome">
            <img src={background} alt="" />
            <div className="welcome_message">
                <h1>Hello There</h1>
            </div>
        </div>
    );
}

export default Welcome;