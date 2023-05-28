import React from "react";
import '@styles/Skills.scss';

const Skills = () => {

    const icon_html = <img src="https://img.icons8.com/color/120/null/html-5--v1.png"/>
    const icon_css = <img src="https://img.icons8.com/color/120/null/css3.png"/>
    const icon_js = <img src="https://img.icons8.com/color/120/null/javascript--v1.png"/>
    const icon_git = <img src="https://img.icons8.com/color/120/null/git.png"/>
    const icon_react = <img src="https://img.icons8.com/color/120/null/react-native.png"/>
    const icon_typing = <img src="https://img.icons8.com/color/120/null/keyboard.png"/>

    return (
        <div className="skill_box">
            <div className="skill">
                <div className="sphere">
                    {icon_html}
                </div>
                <p>HTML5</p>
            </div>
            <div className="skill">
                <div className="sphere">
                    {icon_css}
                </div>
                <p>CSS3</p>
            </div>
            <div className="skill">
                <div className="sphere">
                    {icon_js}
                </div>
                <p>JavaScript</p>
            </div>
            <div className="skill">
                <div className="sphere">
                    {icon_git}
                </div>
                <p>Git</p>
            </div>
            <div className="skill">
                <div className="sphere">
                    {icon_react}
                </div>
                <p>React.Js</p>
            </div>
            <div className="skill">
                <div className="sphere">
                    {icon_typing}
                </div>
                <p>TouchTyper <br/> (60wpm)</p>
            </div>
        </div>
    );
}

export default Skills;