import React from 'react'
import CardFlip from './CardFlip'

function Cards_2() {
    return (
        <div>
            <CardFlip isFlipped={false} url={"https://папироска.рф/wa-data/public/shop/products/31/10/1031/images/100165/100165.aromatizator-ngf---zelenoe-yabloko.970.jpg"} key={"1"} english={"apple"} transcription={"[apple]"} russian={"яблоко"} tags={"fruits"} />
            <CardFlip isFlipped={true} key={"1"} english={"apple"} transcription={"[apple]"} russian={"яблоко"} tags={"fruits"} />
        </div>
    )
}

export default Cards_2
