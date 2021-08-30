import React from 'react'
import './GameCard.css'

const GameCard = props => {
    const { frontImg, frontText, backImg, flipped, onClick } = props
    const img = flipped ? frontImg : backImg
    const text = flipped ? frontText : ""
    return (
        <div className="gameCard" onClick={onClick}>
            <img src={img} alt="" />
            <p>{text}</p>
        </div>
    )
}

export default GameCard