import React  from 'react';
import IntroSection from '@components/IntroSection';
import '@styles/BooksPage.scss';
import profile from '@assets/profile.jpeg'

const allEntries= [
    { category: 'Films', title: 'Inception', imageSrc: '', imageTest: profile},
    { category: 'Films', title: 'The Dark Knight',  imageSrc: '', imageTest: profile},
    { category: 'Books', title: 'Never Split The Difference',  imageSrc: '', imageTest: profile},
    { category: 'Books', title: 'Quiet',  imageSrc: '', imageTest: profile},
    { category: 'Series', title: 'SmallVille',  imageSrc: '', imageTest: profile},
    { category: 'Series', title: 'Clone Wars',  imageSrc: '', imageTest: profile},
    { category: 'VideoGames', title: 'Forza Motorsport',  imageSrc: '', imageTest: profile},
    { category: 'VideoGames', title: 'Forza Horizon 5',  imageSrc: '', imageTest: profile},
    { category: 'VideoGames', title: 'Outer Wilds',  imageSrc: '', imageTest: profile},
    { category: 'VideoGames', title: 'Escape Academy',  imageSrc: '', imageTest: profile},
]

const Books = () => {
    const [entries, setEntries] = React.useState(allEntries)
    

    function selectCategory (categoria) {
        const entriesFiltered = allEntries.filter(entries => entries.category === categoria)
        setEntries(entriesFiltered)
    }
    return (
        <div className='Books'>
            <IntroSection />
            <section className='content'>
                <nav className='type-nav'>
                    <div className='category' onClick={() => selectCategory('Films')}>Films</div>
                    <div className='category' onClick={() => selectCategory('Series')}>Series</div>
                    <div className='category' onClick={() => selectCategory('Books')}>Books</div>
                    <div className='category' onClick={() => selectCategory('VideoGames')}>Videogames</div>
                </nav>
                <div className='books-content'>
                    {entries.map(
                        (entry) => (
                            <div 
                            key={entry.title} 
                            className='content-entry'>{entry.title}
                            </div>
                        )
                    )}
                </div>
            </section>

        </div>
    )   
}

export default Books;