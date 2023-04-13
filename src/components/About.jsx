import React from "react";
import profile from '@assets/profile.jpeg';
import read from '@assets/read.jpeg';
import '@styles/About.scss';

const About = () => {
    const about_me = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam illo impedit ipsum ratione omnis commodi quibusdam, unde itaque eius corrupti non delectus libero aut consequatur quis quos esse, soluta ullam!';

    const kalixer = {
        Name: 'Alejandro Cáceres',
        Phone: '+569 499 7831',
        Experience: 'A few personal projects',
        Age: '22',
        Afiliations: 'Grey Jedi',
        Studies: 'Platzi.com',
        English: 'B2 Level (medium)',
        Skills: 'Front-End Developer'
    }
    const kalixer_keys = Object.keys(kalixer);
    const kalixer_values = Object.values(kalixer);

    console.log(kalixer_keys[0])
    console.log(kalixer_values)


    return (
        <div className="about">
            <div className="about_container">
                <div className="ac_left">
                    <img src={profile} alt="" />
                </div>
                <div className="ac_right">
                    <div className="box about_title">
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
                            <p><strong>{kalixer_keys[4]}: </strong>{kalixer.Afiliations}</p>
                        </div>
                        <div className="data_box">
                            <p><strong>{kalixer_keys[5]}: </strong>{kalixer.Studies}</p>
                        </div>
                        <div className="data_box">
                            <p><strong>{kalixer_keys[6]}: </strong>{kalixer.English}</p>
                        </div>
                        <div className="data_box">
                            <p><strong>{kalixer_keys[7]}: </strong>{kalixer.Skills}</p>
                        </div>
                    </div>
                    <div className="box">
                        <button type="button" className="button_cv">Downlod CV</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;