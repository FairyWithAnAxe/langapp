import React from 'react'
import CardsSlider from './CardsSlider/CardsSlider'
import Table from './Table'
import { WordsProvider } from '../../context/WordsContext'
import Error from '../Error'




function Homework() {
    return (
        <>
            {/* <CardsSlider /> */}
            <Table />
            <Error />
        </>
    )
}

export default Homework
