import React from "react";
import '@styles/Footer.scss';

const Footer = () => {
    const mail_icon = <img src="https://img.icons8.com/nolan/64/new-post.png"/>
    const phone_icon = <img src="https://img.icons8.com/nolan/64/phone.png"/>
    const share_icon = <img src="https://img.icons8.com/nolan/64/share.png"/>
    const linkedId_icon = <img src="https://img.icons8.com/nolan/64/linkedin.png"/>
    const insta_icon = <img src="https://img.icons8.com/nolan/64/instagram-new.png"/>


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
                        <p>Phone number</p>
                    </div>
                    <div className="data data-content">
                        <p>+569 4993 7831</p>
                    </div>
                </div>
                <div className="contact">
                    <div className="data data-title">
                        {share_icon}
                        <p>Social Media</p>
                    </div>
                    <div className="data data-content">
                        <button type="button">{linkedId_icon}</button>
                        <button type="button">{insta_icon}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;