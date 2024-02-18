import React from 'react'
import '@styles/BlockInfo.scss'

function BlockInfo({entry}) {
    const quote = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, blanditiis nemo. Quia, dolore animi. Accusantium corrupti reprehenderit corporis cum voluptatem! Dolorem recusandae quae nobis veritatis pariatur rerum atque eaque molestias.`
    
    return (
      <div className='BlockInfo'>
        <div className='block-image-container'>
          <figure>
            <img src={entry.imageBackground} alt="" />
          </figure>
        </div>
        <div className='block-quote'>
          <h3>Title of the quote</h3>
          <p>{quote}</p>
          <p>Writer</p>
        </div>
      </div>
    )
}

export { BlockInfo }