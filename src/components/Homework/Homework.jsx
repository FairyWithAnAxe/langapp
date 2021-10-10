import React from 'react'
import CardsSlider from './CardsSlider/CardsSlider'
import Table from './Table'
import { WordsProvider } from '../../context/WordsContext'




function Homework() {
    return (
        <WordsProvider>
            <CardsSlider />
            <Table />
        </WordsProvider>
    )
}

export default Homework
