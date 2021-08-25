import React from 'react'
import './NeonBtn.css'



export default function NeonBtn(props) {

    // const [pressed, setPressed] = useState(false);


    // const handleChange = () => {
    //     setPressed(!pressed);
    // }

    return (
        <div className="container-neon">
            <a href="#"><span>Learn</span></a>
            <a href="#"><span>Play</span></a>
        </div>


        // <div>
        //     <button {...props} onClick={handleChange}>
        //         {/* {pressed ? "Нажата" : "Нажми меня"} */}
        //         {/* {pressed ? <AddToCartForm /> : "Translate"} */}
        //     </button>
        // </div>

    );
}