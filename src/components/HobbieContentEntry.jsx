import React from 'react'

function HobbieContentEntry({entry, handleClick}) {
    const [mouseOver, setMouseOver] = React.useState(false)

    let entryData = (
        <div className='content-data'>
            <h1>{entry.title}</h1>
            <h3>{entry.rate}</h3>
        </div>
    )
    const showData = () => {
        setMouseOver(true)
    }
    const stopShowData = () => {
        setMouseOver(false);
    }
  return (
    <div
        className='content-entry'
        onMouseOver={() => showData(entry)}
        onMouseLeave={stopShowData}
        onClick={() => handleClick(entry)}
    >   
        <figure>
            <img src={entry.imageSrc} alt="background picture" />
        </figure>
        <div className={`content-data ${mouseOver ? 'show' : 'hide'}`}>
            <h1>{entry.title}</h1>
            <h3>{entry.rate}</h3>
        </div>
    </div>
  )
}

export { HobbieContentEntry }