import React from 'react';

import '@styles/WhatDoIDo.scss'

const message_gpt = 'An avid polymath with a passion for programming, avid reading, and artistics. '
const macro_message = `"A buman being should be able to [do a lot of things]. Specialization is for insects." - Robert A. Heinlein`

const WhatDoIDo = () => {
    return (
        <div className="What_do_i_do">
            <div className='macro_left'>
                <div className='macro_box'>
                    <p>WHAT DO I DO</p>
                    <p>{macro_message}</p>
                </div>
            </div>
            <div className='macro_right'>
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

export default WhatDoIDo;