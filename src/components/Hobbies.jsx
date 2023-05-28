import React from 'react';
// import '@styles/Hobbies.scss';

const Hobbies = () => {
    return (
        <div className="skill_box">
            <div className="skill">
                <div className="sphere">
                    <img src="https://www.pngrepo.com/png/907/512/pencil.png"/>
                </div>
                <p>Drawing</p>
            </div>
            <div className="skill">
                <div className="sphere">
                    <img src="https://www.pngrepo.com/png/26848/180/book.png"/>
                </div>
                <p>Reading</p>
            </div>
            <div className="skill">
                <div className="sphere">
                    <img src="https://www.pngrepo.com/png/109162/180/blog.png" />
                </div>
                <p>Blog</p>
            </div>
            <div className="skill">
                <div className="sphere">
                    <img src="https://www.pngrepo.com/png/75533/180/brain.png" />
                </div>
                <p>Abstract Thinking</p>
            </div>
        </div>
    );
}

export default Hobbies;