import React from 'react'
import IntroSection from '@components/IntroSection'

import { BlockInfo } from '../components/BlockInfo'
import { TiArrowBackOutline } from "react-icons/ti";

import '@styles/HobbieEntryPage.scss'

import { hobbieDataBase } from '../utils/hobbieDataBase';
import { getEntry } from '../utils/getEntry';


function HobbieEntryPage({hobbieEntry, goBackClick, setIntroSection, introSection}) {
  const [arrow, setArrow] = React.useState(<TiArrowBackOutline />)

  // Aquí está toda la información del la entrada
  const entry = getEntry(hobbieEntry, hobbieDataBase)
  console.log(entry)

  const overColor = (evento) => {
    evento.target.style.borderColor = 'blue'
    setArrow(<TiArrowBackOutline fill='blue'/>)
  }
  const overDefault = (evento) => {
    evento.target.style.borderColor = 'grey'
    setArrow(<TiArrowBackOutline />)
  }

  React.useEffect(() => {
    setIntroSection(<IntroSection backgroundImg={entry.imageBackground}/>)
  }, [])

  return (
    <>
        <div className='HobbieEntryPage'>
            {introSection}
            <section className='introduction'>
                <h1 className='title'>{entry.title}</h1>
                <p>Description: {entry.description}</p>
                <p>Rate: {entry.rate}</p>
                <p>Recomendation: {entry.recomendation}</p>
            </section>

            <div className='review'>
                <h2>{entry.reviewTitle}</h2>
                <p>{entry.review} <br /> {entry.review}</p>
                <BlockInfo entry={entry}/>
                <p>{entry.review} <br /> {entry.review}</p>
                <p>{entry.review} <br /> {entry.review}</p>
            </div>
              <div className='back-button' onClick={goBackClick} onMouseOver={overColor} onMouseLeave={overDefault}>
                {arrow}
              </div>
            <div className='backgroundStatic'></div>

        </div>
    </>
  )
}

export { HobbieEntryPage }