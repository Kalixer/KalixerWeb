import React from 'react';
import icon_draw from '/assets/icon_draw.png'
import icon_read from '/assets/icon_read.png'
import icon_blog from '/assets/icon_blog.png'
import icon_abst from '/assets/icon_abst.png'

const Hobbies = () => {
    // const icon_draw = <img src="https://www.pngrepo.com/png/907/512/pencil.png"/>
    // const icon_read = <img src="https://www.pngrepo.com/png/26848/180/book.png"/>
    // const icon_blog = <img src="https://www.pngrepo.com/png/109162/180/blog.png" />
    // const icon_abst = <img src="https://www.pngrepo.com/png/75533/180/brain.png" />
    return (
        <div className="skill_box">
            <div className="skill">
                <div className="sphere">
                    <img src={icon_draw} alt="" />
                </div>
                <p>Drawing</p>
            </div>
            <div className="skill">
                <div className="sphere">
                    <img src={icon_read} alt="" />
                </div>
                <p>Reading</p>
            </div>
            <div className="skill">
                <div className="sphere">
                    <img src={icon_blog} alt="" />
                </div>
                <p>Blog</p>
            </div>
            <div className="skill">
                <div className="sphere">
                    <img src={icon_abst} alt="" />
                </div>
                <p>Abstract Thinking</p>
            </div>
        </div>
    );
}

export default Hobbies;