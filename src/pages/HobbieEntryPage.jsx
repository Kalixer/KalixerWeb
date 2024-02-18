import React from 'react'
import IntroSection from '@components/IntroSection'
// import { setHobbieEntry } from "../hooks/setHobbieEntry";


import '@styles/HobbieEntryPage.scss'

const review = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque velit fugit, quis consectetur voluptatem ab ratione, earum autem deserunt eaque placeat deleniti mollitia ad quo fuga! Rerum asperiores ducimus dolore?
Neque quasi voluptas culpa amet consequuntur beatae quis doloribus illo! Accusantium explicabo vero voluptate pariatur commodi rerum ut incidunt numquam itaque asperiores corporis similique maiores, illo natus possimus reprehenderit aperiam?`

const quote = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, blanditiis nemo. Quia, dolore animi. Accusantium corrupti reprehenderit corporis cum voluptatem! Dolorem recusandae quae nobis veritatis pariatur rerum atque eaque molestias.`
function HobbieEntryPage({hobbieEntry, introSection}) {
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
                <div className='blockInfo'>
                  <div className='block-image-container'>
                    <figure>
                      <img src={hobbieEntry.imagenBackground} alt="" />
                    </figure>
                  </div>
                  <div className='block-quote'>
                    <h3>Title of the quote</h3>
                    <p>{quote}</p>
                    <p>Writer</p>
                  </div>
                </div>
                <p>{review} <br /> {review}</p>
            </div>
            <div className='backgroundStatic'></div>

        </div>
    </>
  )
}

export { HobbieEntryPage }