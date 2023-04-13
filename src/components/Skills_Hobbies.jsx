import React from "react";
import Skills from "@components/Skills";
import Hobbies from "@components/Hobbies";

import '@styles/Skills_Hobbies.scss';

const Skills_Hobbies = () => {

    const skills = []
    skills.push('HTML')
    skills.push('CSS')
    skills.push('JavaScript')
    skills.push('Git')
    skills.push('React.js')
    skills.push('TouchTyping 60wpm')
    skills.push('English B2')


    const hobbies = []
    hobbies.push('Ocasional Drawer')
    hobbies.push('Reading')
    hobbies.push('Overthinker')
    hobbies.push('Anime lover')

    return (
        <div className="skills_hobbies">
            <div className="skills_section">
                <h1 className="title_section">Skills</h1>
                <Skills />
            </div>
            <div className="hobbies_section">
                <h1 className="title_section">Hobbies</h1>
                <Hobbies />
            </div>
        </div>
    );
}

export default Skills_Hobbies;