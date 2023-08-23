import React from "react";
import '@styles/Footer.scss';

const Footer = () => {
    const mail_icon = <img src="https://img.icons8.com/nolan/64/new-post.png"/>
    const phone_icon = <img src="https://img.icons8.com/nolan/64/phone.png"/>
    const share_icon = <img src="https://img.icons8.com/nolan/64/share.png"/>
    const linkedId_icon = <img src="https://img.icons8.com/nolan/64/linkedin.png"/>
    const insta_icon = <img src="https://img.icons8.com/nolan/64/instagram-new.png"/>

    const phone_joke = `Samsung A53 (Joke)`
    const handleClickLinkedIn = () => {
        window.open('https://www.linkedin.com/in/alejandro-c%C3%A1ceres-505204268', '_blank')
    }
    const handleClickInstagram = () => {
        window.open('https://instagram.com/al.caceres72?igshid=ZDdkNTZiNTM=', '_blank')
    }

    return (
        <div className="footer">
            {/* <p>Footer</p> */}
            <div className="contacts">
                <div className="contact">
                    <div className="data data-title">
                        {mail_icon}
                        <p>Email</p>
                    </div>
                    <div className="data data-content">
                        <p>al.caceres.ag72@gmail.com</p>
                    </div>
                </div>
                <div className="contact">
                    <div className="data data-title">
                        {phone_icon}
                        <p>Phone</p>
                    </div>
                    <div className="data data-content">
                        <p>{phone_joke}</p>
                    </div>
                </div>
                <div className="contact">
                    <div className="data data-title">
                        {share_icon}
                        <p>Social Media</p>
                    </div>
                    <div className="data data-content">
                        <a href="#" onClick={handleClickLinkedIn}>
                            <button>{linkedId_icon}</button>
                        </a>
                        <a href="#" onClick={handleClickInstagram}>
                            <button type="button">{insta_icon}</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;