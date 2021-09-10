import React from 'react'
import words from '../../wordsAPI.json'
import '../../Cards_1/NeonCard.css'
import Card_slider from './Card_slider';



function CardsSlider() {
    return (
        <div className="card_2_body">
            <div className="container">
                <Card_slider data={words} />
            </div>
        </div>
    );
}

export default CardsSlider;