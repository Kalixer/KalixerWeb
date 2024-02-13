import React  from 'react';
import { useFooterContext } from '@containers/Layout';
import IntroSection from '@components/IntroSection';
import { HobbiesContent } from '@components/HobbiesContent';
import '@styles/HobbiesPage.scss';

const bookBackground = 'https://wallpapers.com/images/featured/book-5q6xbfxwtbme5kaj.jpg'

const allEntries= [
    { category: 'Films', title: 'Inception', imageSrc: 'https://m.media-amazon.com/images/I/A1eIBPcRUqL._AC_UF894,1000_QL80_.jpg', imagenBackground: 'https://wallpaperswide.com/download/inception_totem-wallpaper-1920x1080.jpg'},
    { category: 'Films', title: 'Oppenheimer',  imageSrc: 'https://cloudfront-us-east-1.images.arcpublishing.com/copesa/S4367N7H5VAYTB225C4GCG2ZHI.jpeg', imagenBackground: 'https://pixewall.com/wp-content/uploads/2023/07/oppenheimer90930510052-scaled.jpg'},
    { category: 'Books', title: 'Never Split The Difference',  imageSrc: 'https://images.squarespace-cdn.com/content/v1/5a1ee5b29f07f5ecc278f6c8/1567952731469-P0061DFC7X6K5OBV86JO/Never+Split+The+Difference.jpg', imagenBackground: bookBackground},
    { category: 'Books', title: 'Quiet',  imageSrc: 'https://images.booksense.com/images/722/694/9788417694722.jpg', imagenBackground: bookBackground},
    { category: 'Series', title: 'SmallVille',  imageSrc: 'https://www.bolsamania.com/seriesadictos/wp-content/uploads/2011/01/00037716.jpg', imagenBackground: 'https://images.alphacoders.com/118/1184862.jpg'},
    { category: 'Series', title: 'Clone Wars',  imageSrc: 'https://m.media-amazon.com/images/I/817h8As4D7L.jpg', imagenBackground: 'https://i.redd.it/dg2idt3wyji41.jpg'},
    { category: 'VideoGames', title: 'Forza Motorsport',  imageSrc: 'https://myhotposters.com/cdn/shop/products/mL6943_1024x1024.jpg?v=1697834226', imagenBackground: 'https://images3.alphacoders.com/133/1334079.png'},
    { category: 'VideoGames', title: 'Forza Horizon 5',  imageSrc: 'https://i.ebayimg.com/images/g/9VoAAOSwaU9hfHFE/s-l1600.jpg', imagenBackground: 'https://i.redd.it/oklr0hxxlu571.png'},
    { category: 'VideoGames', title: 'Outer Wilds',  imageSrc: 'https://m.media-amazon.com/images/I/61nDUVM-I3L.jpg', imagenBackground: 'https://preview.redd.it/y1jqr8m0fv531.jpg?width=2580&format=pjpg&auto=webp&s=2f377181d98a5629682394e29c687679a49bfef1'},
    { category: 'VideoGames', title: 'Escape Academy',  imageSrc: 'https://image.api.playstation.com/vulcan/ap/rnd/202206/2716/LNQM7aIv1GVdyqqtzZ24oa28.png', imagenBackground: 'https://images.alphacoders.com/125/1251036.jpg'},
]

// Esto es para que puedas renderizar un div en type-nav por cada categoría
let categoriaRepetida
const entriesCategory = allEntries.map((entry) => {
    if(entry.category !== categoriaRepetida) {
        categoriaRepetida = entry.category
        return entry.category
    } else {
        return
    }
}).filter(entry => entry !== undefined)
console.log(entriesCategory[0])

/*
    Ideas for the next sesion

    onClick
    1. Modify the whole pag
    2. Make it responsive
*/

const Books = () => {
    const [entries, setEntries] = React.useState(allEntries)
    const [introSection, setIntroSection] = React.useState(<IntroSection />)
    const [sectionSelected, setSectionSelected] = React.useState(false)
    
    const { setHideFooter } = useFooterContext()
    setHideFooter(true)

    function selectCategory (categoria) {
        const entriesFiltered = allEntries.filter(entries => entries.category === categoria)
        setEntries(entriesFiltered)
    }
    function handleClick(elemento) {
        setIntroSection(<IntroSection backgroundImg={elemento.imagenBackground}/>)
        setSectionSelected(!sectionSelected)
        console.log(introSection)
    }
    function goBack() {
        setSectionSelected(false)
        setIntroSection(<IntroSection />)
    }

    const hobbiesContentComponent = <HobbiesContent 
    entries={entries} 
    handleClick={handleClick}
    
    />

    return (
        <div className='Books'>
                {introSection}
                <section className='content'>
                    <nav className='type-nav'>
                        {!sectionSelected ? 
                            entriesCategory.map((entry) => (
                            <div className='category' onClick={() => selectCategory(entry)}>{entry}</div>    
                        )) : 
                            <div className='category' onClick={() => goBack()}>Go back</div>}
                    </nav>
                    {!sectionSelected ? hobbiesContentComponent : <></>}
                </section>

            </div>
    )   
}

export default Books;