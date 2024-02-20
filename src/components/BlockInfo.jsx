import React from 'react'
import '@styles/BlockInfo.scss'

function BlockInfo({entry}) {
    
    return (
      <div className='BlockInfo'>
        <div className='block-image-container'>
          <figure>
            <img src={entry.imageBlock} alt="" />
          </figure>
        </div>
        <div className='block-quote'>
          <h3>{entry.quoteTitle}</h3>
          <p>{entry.quoteDescription}</p>
          <p>{entry.quoteWriter}</p>
        </div>
      </div>
    )
}

export { BlockInfo }