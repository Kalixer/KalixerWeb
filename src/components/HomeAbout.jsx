import React from "react";

import '@styles/HomeAbout.scss';


const lorem1 = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod sequi, unde ipsa natus ad enim dolore eveniet tempora officia dolor accusamus debitis aliquid nostrum et molestiae nemo recusandae quis similique.
Sunt veritatis voluptas at deserunt distinctio hic possimus officia dolorum tenetur, autem obcaecati ea accusamus architecto ipsam dolorem corrupti optio ut aliquam beatae officiis natus tempora exercitationem reiciendis! Repellat, labore!`
const lorem2 = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod sequi, unde ipsa natus ad enim dolore eveniet tempora officia dolor accusamus debitis aliquid nostrum et molestiae nemo recusandae quis similique.
Sunt veritatis voluptas at deserunt distinctio hic possimus officia dolorum tenetur, autem obcaecati ea accusamus architecto ipsam dolorem corrupti optio ut aliquam beatae officiis natus tempora exercitationem reiciendis! Repellat, labore!
Sunt veritatis voluptas at deserunt distinctio hic possimus officia dolorum tenetur, autem obcaecati ea accusamus architecto ipsam dolorem corrupti optio ut aliquam beatae officiis natus tempora exercitationem reiciendis! Repellat, labore!`


const foto1 = 'https://images.pexels.com/photos/2565919/pexels-photo-2565919.jpeg'
const foto2 = 'https://images.pexels.com/photos/1029577/pexels-photo-1029577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'


const HomeAbout = () => {
    return (
        <div className='HomeAbout'>
            <div className='introduction'>
                <div className='title_section'>
                    <h1>About me</h1>
                </div>
                <div className='description'>
                    <div className='message_1'>
                        <p>A man <br />A project <br />A begining</p>
                    </div>
                    <div className='message_2'>
                        <p>{lorem1}</p>
                        <p>{lorem2}</p>
                    </div>
                </div>
            </div>
            <div className='images'>
                <figure className='image1'>
                    <img src={foto1} alt="" />
                </figure>
                <div className='quote_and_image'>
                    <div className='quote'>
                        <p>"The only way to know what the future will be like is to build it."</p>
                    </div>
                    <figure className='image2'>
                        <img src={foto2} alt="" />
                    </figure>
                </div>
            </div>
            <div className="what_i_do">
                <h1>What do I do</h1>
                <div className="do_box">
                    <h1>Studies</h1>
                    <p></p>
                </div>
                <div className="do_box">
                    <h1>Experience and skills</h1>
                    <p></p>
                </div>
                <div className="do_box">
                    <h1>Hobbies</h1>
                    <p></p>
                </div>
                <div className="do_box">
                    <h1>Test</h1>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default HomeAbout;