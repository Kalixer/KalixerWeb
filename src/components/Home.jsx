import React from "react";
import About from "@components/About";
import Welcome from "./Welcome";
import Skills_Hobbies from "./Skills_Hobbies";


const Home = () => {
    return (
        <>
            <Welcome/>
            <About />
            <Skills_Hobbies />
        </>
    );
}

export default Home;