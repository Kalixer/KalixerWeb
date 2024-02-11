import React  from 'react';
import IntroSection from '@components/IntroSection';
import '@styles/BooksPage.scss';
import profile from '@assets/profile.jpeg'


const category = [
    { title: 'Films' },
    { title: 'Series' },
    { title: 'Books' },
    { title: 'Videogames' },
]

const entries= [
    { category: 'Films', title: 'Inception', imageSrc: '', imageTest: profile},
    { category: 'Films', title: 'The Dark Knight',  imageSrc: '', imageTest: profile},
    { category: 'Books', title: 'Never Split The Difference',  imageSrc: '', imageTest: profile},
    { category: 'Books', title: 'Quiet',  imageSrc: '', imageTest: profile},
    { category: 'Series', title: 'SmallVille',  imageSrc: '', imageTest: profile},
    { category: 'Series', title: 'SmallVille',  imageSrc: '', imageTest: profile},
    { category: 'VideoGames', title: 'Forza Motorsport',  imageSrc: '', imageTest: profile},
    { category: 'VideoGames', title: 'Forza Horizon 5',  imageSrc: '', imageTest: profile},
    { category: 'VideoGames', title: 'Outer Wilds',  imageSrc: '', imageTest: profile},
    { category: 'VideoGames', title: 'Escape Academy',  imageSrc: '', imageTest: profile},
]
const filmsData = entries.filter(entry => entry.category === 'Films')
const seriesData = {}
const booksData = {}
const videogamesData = {}

const Books = () => {
    return (
        <div className='Books'>
            <IntroSection />
            <section className='content'>
                <nav className='type-nav'>
                    <div className='category'>Films</div>
                    <div className='category'>Series</div>
                    <div className='category'>Books</div>
                    <div className='category'>Videogames</div>
                </nav>
                <div className='books-content'>
                    {entries.map(
                        (entry) => (
                            <div className='content-entry'>{entry.title}</div>
                        )
                    )}
                </div>
            </section>

        </div>
    )   
}

export default Books;