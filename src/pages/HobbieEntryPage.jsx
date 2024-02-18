import React from 'react'
import IntroSection from '@components/IntroSection'

import { BlockInfo } from '../components/BlockInfo'
import { TiArrowBackOutline } from "react-icons/ti";

import '@styles/HobbieEntryPage.scss'

import { hobbieDataBase } from '../utils/hobbieDataBase';
import { getEntry } from '../utils/getEntry';


function HobbieEntryPage({hobbieEntry, goBackClick}) {
  const [arrow, setArrow] = React.useState(<TiArrowBackOutline />)

  const entry = getEntry(hobbieEntry, hobbieDataBase)
  console.log(entry)

  const review = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque velit fugit, quis consectetur voluptatem ab ratione, earum autem deserunt eaque placeat deleniti mollitia ad quo fuga! Rerum asperiores ducimus dolore?
  Neque quasi voluptas culpa amet consequuntur beatae quis doloribus illo! Accusantium explicabo vero voluptate pariatur commodi rerum ut incidunt numquam itaque asperiores corporis similique maiores, illo natus possimus reprehenderit aperiam?`


  const overColor = (evento) => {
    evento.target.style.borderColor = 'blue'
    setArrow(<TiArrowBackOutline fill='blue'/>)
  }
  const overDefault = (evento) => {
    evento.target.style.borderColor = 'grey'
    setArrow(<TiArrowBackOutline />)
  }

  return (
    <>
        <div className='HobbieEntryPage'>
          <IntroSection backgroundImg={entry.imageBackground}/>
            <section className='introduction'>
                <h1 className='title'>{entry.title}</h1>
                <p>Description: A great production made by the best writers of stories</p>
                <p>Rate: 7.5/10</p>
                <p>Recomendation: If you like it</p>
            </section>

            <div className='review'>
                <h2>An amazing introduction</h2>
                <p>{review} <br /> {review}</p>
                <BlockInfo entry={entry}/>
                <p>{review} <br /> {review}</p>
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