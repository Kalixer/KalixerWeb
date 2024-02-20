import React  from 'react';
import { useFooterContext } from '@containers/Layout';
import IntroSection from '@components/IntroSection';
import { HobbiesContent } from '@components/HobbiesContent';
import { HobbieEntry } from '@components/HobbieEntry';
// import { setHobbieEntry } from '../hooks/setHobbieEntry';
import '@styles/HobbiesPage.scss';
import { HobbieEntryPage } from './HobbieEntryPage';
import scrollToTop from '../utils/scrollToTop';
import { hobbieDataBase } from '../utils/hobbieDataBase'

const allEntries = hobbieDataBase

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


const Books = () => {
    const [entries, setEntries] = React.useState(allEntries)
    const [introSection, setIntroSection] = React.useState(<IntroSection />)
    const [sectionSelected, setSectionSelected] = React.useState(false)
    const [entrySelected, setEntrySelected] = React.useState(false)
    const [hobbieEntry, setHobbieEntry] = React.useState('')
    
    const { setHideFooter } = useFooterContext()
    
    React.useEffect(() => {
        setHideFooter(true)
    }, [])

    const goBackClick = () => {
        scrollToTop()
        setEntrySelected(false)
        setSectionSelected(false)
        // setIntroSection()
    }


    function selectCategory (categoria) {
        const entriesFiltered = allEntries.filter(entries => entries.category === categoria)
        setEntries(entriesFiltered)
    }
    function handleClick(elemento) {
        // setIntroSection(<IntroSection backgroundImg={elemento.imagenBackground}/>)
        setSectionSelected(!sectionSelected)
        setHobbieEntry(elemento) // Por ahora esto transmite la info de la entrada
        setEntrySelected(true)
        scrollToTop()
    }
    function goBack() {
        setSectionSelected(false)
        setIntroSection(<IntroSection />)
    }

    // Componente <HobbiesContent />
    const hobbiesContentComponent = <HobbiesContent 
    entries={entries} 
    handleClick={handleClick}
    introSection={introSection}
    
    />

    if(!entrySelected) {
        return (
            <div className='Books'>
            {introSection}
            <section className='content'>
                <nav className='type-nav'>
                    {!sectionSelected ? 
                        // El 'index' es solo para que no salga un warning en la consola, en realidad no existe
                        entriesCategory.map((entry, index) => (
                            <div key={index} className='category' onClick={() => selectCategory(entry)}>{entry}</div>    
                            )) : 
                            <div className='category' onClick={() => goBack()}>Go back</div>}
                </nav>
                {!sectionSelected ? hobbiesContentComponent : <HobbieEntry />}
            </section>
    
        </div>
    
        )                           
    } else {
        return(<HobbieEntryPage 
                hobbieEntry={hobbieEntry} 
                goBackClick={goBackClick} 
                setIntroSection={setIntroSection}
                introSection={introSection}
                />)
    }
}

export default Books;