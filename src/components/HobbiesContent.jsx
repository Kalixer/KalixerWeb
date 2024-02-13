import React from 'react'
import '@styles/HobbiesContent.scss'

function HobbiesContent({entries}) {
  return (
    <>
        <div className='HobbiesContent'>
            {entries.map(
                (entry) => (
                    <div
                    key={entry.title} 
                    className='content-entry'
                    onClick={() => handleClick(entry)}
                    >
                        <figure>
                            <img src={entry.imageSrc} alt="background picture" />
                        </figure>
                    </div>
                )
            )}
        </div>
    </>
  )
}

export { HobbiesContent };