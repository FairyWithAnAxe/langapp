// import React from 'react'



// class Button extends React.Component {
//     render() {
//         return (

//             <div>
//                 <button className="card-btn">Translate</button>
//             </div>

//         );
//     }
// }

// export default Button;

import React, { useState } from 'react'
// import AddToCartForm from './AddToCartForm';


export default function Button(props) {

    const [pressed, setPressed] = useState(false);


    const handleChange = () => {
        setPressed(!pressed);
    }

    return (
        <div>
            <button {...props} onClick={handleChange}>
                {pressed ? "Нажата" : "Нажми меня"}
                {/* {pressed ? <AddToCartForm /> : "Translate"} */}
            </button>
        </div>

    );
}