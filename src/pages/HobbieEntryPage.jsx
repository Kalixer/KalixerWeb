import React from 'react'

import '@styles/HobbieEntryPage.scss'
import { BlockInfo } from '../components/BlockInfo'
import { TiArrowBackOutline } from "react-icons/ti";

function HobbieEntryPage({hobbieEntry, introSection, goBackClick}) {
  const review = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque velit fugit, quis consectetur voluptatem ab ratione, earum autem deserunt eaque placeat deleniti mollitia ad quo fuga! Rerum asperiores ducimus dolore?
  Neque quasi voluptas culpa amet consequuntur beatae quis doloribus illo! Accusantium explicabo vero voluptate pariatur commodi rerum ut incidunt numquam itaque asperiores corporis similique maiores, illo natus possimus reprehenderit aperiam?`

  const [arrow, setArrow] = React.useState(<TiArrowBackOutline />)

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
          {introSection}
            <section className='introduction'>
                <h1 className='title'>{hobbieEntry.title}</h1>
                <p>Description: A great production made by the best writers of stories</p>
                <p>Rate: 7.5/10</p>
                <p>Recomendation: If you like it</p>
            </section>

            <div className='review'>
                <h2>An amazing introduction</h2>
                <p>{review} <br /> {review}</p>
                <BlockInfo hobbieEntry={hobbieEntry}/>
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