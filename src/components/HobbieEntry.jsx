import React from 'react'
import '@styles/HobbieEntry.scss'

const review = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque velit fugit, quis consectetur voluptatem ab ratione, earum autem deserunt eaque placeat deleniti mollitia ad quo fuga! Rerum asperiores ducimus dolore?
Neque quasi voluptas culpa amet consequuntur beatae quis doloribus illo! Accusantium explicabo vero voluptate pariatur commodi rerum ut incidunt numquam itaque asperiores corporis similique maiores, illo natus possimus reprehenderit aperiam?`

function HobbieEntry() {
  return (
    <>
        <div className='HobbieEntry'>
            <section className='introduction'>
                <h1 className='title'>Hobbie Entry</h1>
                <p>Description: A great production made by the best writers of stories</p>
                <p>Rate: 7.5/10</p>
                <p>Recomendation: If you like it</p>
            </section>
            <div className='review'>
                <p>{review} <br /> {review}</p>
                <p>{review} <br /> {review}</p>
            </div>

        </div>
    </>
  )
}

export {HobbieEntry}