import React from "react";
import profile from '@assets/profile.jpeg';
import '@styles/About.scss';

const About = () => {
    const about_me = `My name is Alejandro Cáceres. I'm a student at Platzi.com. I make Front-End projects to test, and increase my knowledge. I speak Spanish natively and English at a B2 Level. I'm a TouchTyper and I currently write at 60-70wpm. In the topic of hobbies, I like to read books, draw and think in abstract subjects.`;

    const kalixer = {
        Name: 'Alejandro Cáceres',
        Phone: 'Samsung A53 (Just Kidding)',
        Experience: 'A few personal projects',
        Age: '23',
        GitHub: 'github.com/Kalixer',
        Studies: 'Platzi.com',
        English: 'B2 Level (Intermediate)',
        MBTI: 'INTJ'
    }
    const kalixer_keys = Object.keys(kalixer);
    
    const handleCV = () => {
        window.open('https://drive.google.com/file/d/1vVRr_U9Kr4Z10HAFGiMqi_-x_ofxPlWY/view?usp=drive_link', '_blank')
    }


    return (
        <div className="about">
            <div className="about_container">
                    <div className="box about_title_responsive">
                        <p>About me</p>
                    </div>
                <div className="ac_left">
                    <img src={profile} alt="" />
                </div>
                <div className="ac_right">
                    <div className="box about_title_desktop">
                        <p>About me</p>
                    </div>
                    <div className="box description">
                        <p>{about_me}</p>
                    </div>
                    <div className="box data_container">
                        <div className="data_box">
                            <p><strong>{kalixer_keys[0]}: </strong>{kalixer.Name}</p>
                        </div>
                        <div className="data_box">
                            <p><strong>{kalixer_keys[1]}: </strong>{kalixer.Phone}</p>
                        </div>
                        <div className="data_box">
                            <p><strong>{kalixer_keys[2]}: </strong>{kalixer.Experience}</p>
                        </div>
                        <div className="data_box">
                            <p><strong>{kalixer_keys[3]}: </strong>{kalixer.Age}</p>
                        </div>
                        <div className="data_box">
                            <p><strong>{kalixer_keys[4]}: </strong>{kalixer.GitHub}</p>
                        </div>
                        <div className="data_box">
                            <p><strong>{kalixer_keys[5]}: </strong>{kalixer.Studies}</p>
                        </div>
                        <div className="data_box">
                            <p><strong>{kalixer_keys[6]}: </strong>{kalixer.English}</p>
                        </div>
                        <div className="data_box">
                            <p><strong>{kalixer_keys[7]}: </strong>{kalixer.MBTI}</p>
                        </div>
                    </div>
                    <div className="box button">
                        <button type="button" className="button_cv" onClick={handleCV}>Downlod CV</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;