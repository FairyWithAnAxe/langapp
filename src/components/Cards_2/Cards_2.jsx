import React from 'react'
import CardFlip from './CardFlip'
import wordsAPI from '../wordsAPI.json'
import './CardFlip.scss'

function Cards_2() {
    return (
        <div className="container_cards_2">
            {wordsAPI.map((word) =>
                <CardFlip key={word.id} word={word} />
            )}
            {/* <CardFlip isFlipped={false} url={"https://папироска.рф/wa-data/public/shop/products/31/10/1031/images/100165/100165.aromatizator-ngf---zelenoe-yabloko.970.jpg"} key={"1"} english={"apple"} transcription={"[apple]"} russian={"яблоко"} tags={"fruits"} />
            <CardFlip isFlipped={true} key={"1"} english={"apple"} transcription={"[apple]"} russian={"яблоко"} tags={"fruits"} /> */}
        </div>
    )
}

export default Cards_2
