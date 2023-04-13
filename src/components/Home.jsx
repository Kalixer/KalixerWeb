import React from "react";
import About from "@components/About";
import Welcome from "./Welcome";
import Skills_Hobbies from "./Skills_Hobbies";
import Portfolio from "./Portfolio";


const Home = () => {
    return (
        <>
            <Welcome/>
            <About />
            <Skills_Hobbies />
            <Portfolio />
        </>
    );
}

export default Home;