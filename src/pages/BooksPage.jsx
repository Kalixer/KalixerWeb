import React  from 'react';
import IntroSection from '@components/IntroSection';
import { useFooterContext } from '@containers/Layout';
import '@styles/BooksPage.scss';

const allEntries= [
    { category: 'Films', title: 'Inception', imageSrc: 'https://m.media-amazon.com/images/I/A1eIBPcRUqL._AC_UF894,1000_QL80_.jpg'},
    { category: 'Films', title: 'The Dark Knight',  imageSrc: 'https://play-lh.googleusercontent.com/qhfncXOqccJ5Y_IBPaRy0O79QZQDl7L5FyKQAsLFICt8c9-2Vfmqd2bniAPESto0ZmSLTOzjl-o1F_jgb2Nr'},
    { category: 'Books', title: 'Never Split The Difference',  imageSrc: 'https://images.squarespace-cdn.com/content/v1/5a1ee5b29f07f5ecc278f6c8/1567952731469-P0061DFC7X6K5OBV86JO/Never+Split+The+Difference.jpg'},
    { category: 'Books', title: 'Quiet',  imageSrc: 'https://images.booksense.com/images/722/694/9788417694722.jpg'},
    { category: 'Series', title: 'SmallVille',  imageSrc: 'https://www.bolsamania.com/seriesadictos/wp-content/uploads/2011/01/00037716.jpg'},
    { category: 'Series', title: 'Clone Wars',  imageSrc: 'https://m.media-amazon.com/images/I/817h8As4D7L.jpg'},
    { category: 'VideoGames', title: 'Forza Motorsport',  imageSrc: 'https://myhotposters.com/cdn/shop/products/mL6943_1024x1024.jpg?v=1697834226'},
    { category: 'VideoGames', title: 'Forza Horizon 5',  imageSrc: 'https://i.ebayimg.com/images/g/9VoAAOSwaU9hfHFE/s-l1600.jpg'},
    { category: 'VideoGames', title: 'Outer Wilds',  imageSrc: 'https://m.media-amazon.com/images/I/61nDUVM-I3L.jpg'},
    { category: 'VideoGames', title: 'Escape Academy',  imageSrc: 'https://image.api.playstation.com/vulcan/ap/rnd/202206/2716/LNQM7aIv1GVdyqqtzZ24oa28.png'},
]

/*
    Ideas for the next sesion

    onClick
    1. Modify the whole pag
    2. Background => the cover of the item
*/

const Books = () => {
    const [entries, setEntries] = React.useState(allEntries)
    
    const { setHideFooter } = useFooterContext()
    setHideFooter(true)

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
                                className='content-entry'
                                >
                                    <figure>
                                        <img src={entry.imageSrc} alt="background picture" />
                                    </figure>
                                </div>
                            )
                        )}
                    </div>
                </section>

            </div>
    )   
}

export default Books;