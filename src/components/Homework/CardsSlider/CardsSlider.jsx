import React, { useEffect } from 'react'
// import words from '../../wordsAPI.json'
import { useWords } from '../../../context/WordsContext'
import '../../Cards_1/NeonCard.css'
import Card_slider from './Card_slider';
import { useState, useRef } from 'react';
import Loader from '../../Loader/Loader';
// import './CardsSlider.scss'
import { observer, inject } from "mobx-react";



const CardsSlider = inject(['wordsStore'])(observer(({ wordsStore }) => {

    // const { words, setWords, loading } = useWords();
    // if (loading) { return <p>Loading...</p> }

    const words = wordsStore.words
    const loadData = wordsStore.loadData


    useEffect(() => {
        loadData();
    }, []);

    const [progress, setProgress] = useState(0)
    const progressChange = () => {
        setProgress(progress + 1)
    }


    return (
        <>

            <div className="card_2_body" >
                <div className="container">
                    {words && <Card_slider words={words} data={words} progress={progress} progressChange={progressChange} />}
                </div>
            </div >

        </>
    );
}))

export default CardsSlider;