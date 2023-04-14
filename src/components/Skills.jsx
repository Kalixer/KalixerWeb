import React from "react";
import '@styles/Skills.scss';

const Skills = () => {
    return (
        <div className="skill_box">
            <div className="skill">
                <div className="sphere">
                    <img src="https://img.icons8.com/color/120/null/html-5--v1.png"/>
                </div>
                <p>HTML5</p>
            </div>
            <div className="skill">
                <div className="sphere">
                    <img src="https://img.icons8.com/color/120/null/css3.png"/>
                </div>
                <p>CSS3</p>
            </div>
            <div className="skill">
                <div className="sphere">
                    <img src="https://img.icons8.com/color/120/null/javascript--v1.png"/>
                </div>
                <p>JavaScript</p>
            </div>
            <div className="skill">
                <div className="sphere">
                    <img src="https://img.icons8.com/color/120/null/git.png"/>
                </div>
                <p>Git</p>
            </div>
            <div className="skill">
                <div className="sphere">
                    <img src="https://img.icons8.com/color/120/null/react-native.png"/>
                </div>
                <p>React.Js</p>
            </div>
            <div className="skill">
                <div className="sphere">
                    <img src="https://img.icons8.com/color/120/null/keyboard.png"/>
                </div>
                <p>TouchTyper <br/> (60wpm)</p>
            </div>
        </div>
    );
}

export default Skills;