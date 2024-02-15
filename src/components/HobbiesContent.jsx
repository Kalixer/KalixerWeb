import React from 'react'
import { Link } from 'react-router-dom'
import '@styles/HobbiesContent.scss'

function HobbiesContent({entries, handleClick}) {
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
                            <Link to='/hobbies/hobbyEntry' >
                                <img src={entry.imageSrc} alt="background picture" />
                            </Link>
                        </figure>
                    </div>
                )
            )}
        </div>
    </>
  )
}

export { HobbiesContent };