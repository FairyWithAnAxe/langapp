import React from 'react'
import words from '../../wordsAPI.json'
import '../../Cards_1/NeonCard.css'
import Card_slider from './Card_slider';
import { useState, useRef } from 'react';
// import './CardsSlider.scss'



function CardsSlider() {

    const [progress, setProgress] = useState(0)
    const progressChange = () => {
        setProgress(progress + 1)
    }


    return (
        <div className="card_2_body">
            <div className="container">
                <Card_slider words={words} progress={progress} progressChange={progressChange} />
            </div>
        </div>
    );
}

export default CardsSlider;