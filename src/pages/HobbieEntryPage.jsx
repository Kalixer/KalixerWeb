import React from 'react'
import IntroSection from '@components/IntroSection'
import '@styles/HobbieEntryPage.scss'

const review = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque velit fugit, quis consectetur voluptatem ab ratione, earum autem deserunt eaque placeat deleniti mollitia ad quo fuga! Rerum asperiores ducimus dolore?
Neque quasi voluptas culpa amet consequuntur beatae quis doloribus illo! Accusantium explicabo vero voluptate pariatur commodi rerum ut incidunt numquam itaque asperiores corporis similique maiores, illo natus possimus reprehenderit aperiam?`

function HobbieEntryPage() {
  return (
    <>
        <div className='HobbieEntryPage'>
            <IntroSection />
            <section className='introduction'>
                <h1 className='title'>Hobbie Entry</h1>
                <p>Description: A great production made by the best writers of stories</p>
                <p>Rate: 7.5/10</p>
                <p>Recomendation: If you like it</p>
            </section>

            <div className='review'>
                <h2>The long awaited answer</h2>
                <p>{review} <br /> {review}</p>
                <div className='blockInfo'></div>
                <p>{review} <br /> {review}</p>
            </div>
            <div className='backgroundStatic'></div>

        </div>
    </>
  )
}

export { HobbieEntryPage }