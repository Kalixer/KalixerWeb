import React from 'react'
import '@styles/HobbiesContent.scss'
import { HobbieContentEntry } from './HobbieContentEntry'

function HobbiesContent({entries, handleClick}) {

  return (
    <>
        <div className='HobbiesContent'>
            {entries.map(
                (entry) => (
                    <HobbieContentEntry 
                        key={entry.title} 
                        entry={entry}
                        handleClick={handleClick}
                    />
                )
            )}
        </div>
    </>
  )
}

export { HobbiesContent };