import React from "react";

import '@styles/HomeAbout.scss';


const lorem1 = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod sequi, unde ipsa natus ad enim dolore eveniet tempora officia dolor accusamus debitis aliquid nostrum et molestiae nemo recusandae quis similique.
Sunt veritatis voluptas at deserunt distinctio hic possimus officia dolorum tenetur, autem obcaecati ea accusamus architecto ipsam dolorem corrupti optio ut aliquam beatae officiis natus tempora exercitationem reiciendis! Repellat, labore!
Asperiores dolor, tenetur, tempore optio quod labore non expedita quis dolorem magni esse dolore aliquam in eligendi odit harum ab ducimus tempora! Dicta saepe quisquam repellat optio ratione. Excepturi, iusto.`

const HomeAbout = () => {
    return (
        <div className='About'>
            <h1>About me</h1>
            <div className='description'>
                <div className='message_1'>
                    <p>A man <br />A project <br />A begining</p>
                </div>
                <div className='message_2'>
                    <p>{lorem1}</p>
                </div>
            </div>
        </div>
    )
}

export default HomeAbout;