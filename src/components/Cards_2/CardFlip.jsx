import React, { useState } from 'react'
import './CardFlip.scss'


// import React, { useState } from 'react'
// import AddToCartForm from './AddToCartForm';


// export default function Button(props) {

//     const [pressed, setPressed] = useState(false);


//     const handleChange = () => {
//         setPressed(!pressed);
//     }

//     return (
//         <div>
//             <button {...props} onClick={handleChange}>
//                 {/* {pressed ? "Нажата" : "Нажми меня"} */}
//                 {pressed ? <AddToCartForm /> : "Translate"}
//             </button>
//         </div>

//     );
// }


// class CardFlip extends React.Component {
export default function CardFlip(props) {


    //const { isFlipped, id, english, transcription, russian, tags } = this.props;

    const [flipped, setFlipped] = useState(false);

    const handleChange = () => {
        setFlipped(!flipped);
    }

    return (

        <div className="card-flip" onClick={handleChange}>
            <div className={"card-flip__inner " + (flipped ? "is-flipped" : "")}>
                <div className="card-flip__face card-flip__face--front">
                    <h2>{props.english}</h2>
                    <h2>{props.transcription}</h2>
                    <h4>Tap me</h4>
                </div>
                <div className="card-flip__face card-flip__face--back">
                    <div className="card-flip__content">
                        <div className="card-flip__header">
                            <img src={props.url} alt={props.english} className="pp" />
                            <h2>{props.english}</h2>
                        </div>
                        <div className="card-flip__body">
                            <h2>{props.transcription}</h2>
                            <h3>{props.russian}</h3>
                            <p><strong>{props.tags}</strong></p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}






// class CardFlip extends React.Component {
//     render() {

//         const { isFlipped, id, english, transcription, russian, tags } = this.props;

//         return (

//             <div className="card-flip">
//                 <div className={"card-flip__inner " + (isFlipped ? "is-flipped" : "")}>
//                     <div className="card-flip__face card-flip__face--front">
//                         <h2>{english}</h2>
//                         <h2>{transcription}</h2>
//                     </div>
//                     <div className="card-flip__face card-flip__face--back">
//                         <div className="card-flip__content">
//                             <div className="card-flip__header">
//                                 <img src="pp.jpg" alt={english} className="pp" />
//                                 <h2>{english}</h2>
//                             </div>
//                             <div className="card-flip__body">
//                                 <h2>{transcription}</h2>
//                                 <h3>{russian}</h3>
//                                 <p><strong>{tags}</strong></p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default CardFlip;


