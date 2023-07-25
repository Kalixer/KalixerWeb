import React from "react";
import '@styles/NotFound.scss'


const NotFound = () => {
    const pink_read = 'https://i.pinimg.com/564x/28/70/af/2870af8d36ea1c178cdad089e46dc677.jpg'
    return (
        <>
            <div className='NotFound'>
                <figure>
                    <img src={pink_read} alt="" />
                </figure>
                <div className='message'>
                    <h1>404 Error</h1>
                    <h2>This page does not exist</h2>
                </div>
            </div>
        </>
    )
}

export default NotFound;