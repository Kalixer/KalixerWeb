import React from "react";

import background from '@assets/background_laptop_cut.jpg'
import '@styles/Home.scss';


const Home = () => {
    return (
        <div className="home">
            <img src={background} alt="" />
            <h1>Hello there</h1>
        </div>
    );
}

export default Home;