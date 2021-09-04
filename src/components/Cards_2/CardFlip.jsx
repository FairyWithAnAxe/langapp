import React, { useState } from 'react'
import './CardFlip.scss'



export default function CardFlip({ word }) {


    const { id, english, transcription, russian, tags } = word

    const [flipped, setFlipped] = useState(false);

    const handleChange = () => {
        setFlipped(!flipped);
    }

    return (

        <div className="card-flip" onClick={handleChange}>
            <div className={"card-flip__inner " + (flipped ? "is-flipped" : "")}>
                <div className="card-flip__face card-flip__face--front">
                    <h2>{word.english}</h2>
                    {/* <h2>{word.transcription}</h2> */}
                </div>
                <div className="card-flip__face card-flip__face--back">
                    <div className="card-flip__content">
                        <div className="card-flip__header">
                            {/* <img src={word.url} alt={word.english} className="pp" /> */}
                            <h2>{word.english}</h2>
                        </div>
                        <div className="card-flip__body">
                            <h3>{word.transcription}</h3>
                            <h3>{word.russian}</h3>
                            <p><strong>{word.tags}</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
