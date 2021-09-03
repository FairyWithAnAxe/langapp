import React from 'react'
import Flashcard from './Flashcard';
import wordsAPI from '../wordsAPI.json'

function Cards_3() {
    return (
        <div className="cards">
            {wordsAPI.map((word) =>
                <Flashcard key={word.id} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags} />
            )}
        </div>
    )
}

export default Cards_3
