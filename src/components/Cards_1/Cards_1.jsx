import React from 'react'
import Card_2 from '../Card_2'
import wordsAPI from '../wordsAPI.json'

const words_card_2_json = `[{
    "english":"butterfly",
    "transcription":"[ ˈbʌtəflaɪ ]",
    "russian":"бабочка",
    "tags":"животные",
    "id":"1"
    }, {
    "english":"butterfly",
    "transcription":"[ ˈbʌtəflaɪ ]",
    "russian":"бабочка",
    "tags":"животные",
    "id":"2"
    }, {
    "english":"butterfly",
    "transcription":"[ ˈbʌtəflaɪ ]",
    "russian":"бабочка",
    "tags":"животные",
    "id":"3"
    }]`;

const words_card_2 = JSON.parse(words_card_2_json);


function Cards_1() {
    return (
        <>
            <div className="card_2_body">
                <div className="container">
                    {words_card_2.map((word) =>
                        <Card_2 key={word.id} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags} />
                    )}
                </div>
            </div>
        </>
    )
}

export default Cards_1
