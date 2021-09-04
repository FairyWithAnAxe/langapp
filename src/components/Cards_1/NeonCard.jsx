import React from 'react'
import { useState } from 'react';
import './NeonCard.css'

function NeonCard({ word }) {
    const { id, english, transcription, russian, tags } = word

    const [flipped, setFlipped] = useState(false);

    const handleChange = () => {
        setFlipped(!flipped);
    }

    return (

        <div className="box" onClick={handleChange}>
            <span></span>
            <div className={"content " + (flipped ? "is-flipped" : "")}>
                <h2>{word.english}</h2>
                {/* <p>{word.transcription}</p> */}
                {/* <p>{russian}</p>
                    <p>{tags}</p> */}
                {/* <a href="#">Translate</a> */}
                {/* <Button /> */}
            </div>
        </div >
    )
}

export default NeonCard








// import React from 'react'






// class Card_2 extends React.Component {
//     render() {

//         const { english, transcription, russian, tags, id } = this.props;

//         return (

//             <div className="box">
//                 <span></span>
//                 <div className="content">
//                     <h2>{english}</h2>
//                     <p>{transcription}</p>
//                     {/* <p>{russian}</p>
//                     <p>{tags}</p> */}

//                     {/* <a href="#">Translate</a> */}
//                     {/* <Button /> */}
//                 </div>

//             </div >
//         );
//     }
// }

// export default Card_2;