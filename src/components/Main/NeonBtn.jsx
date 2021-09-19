import React from 'react'
import { Link } from 'react-router-dom';
import './NeonBtn.css'



export default function NeonBtn(props) {

    // const [pressed, setPressed] = useState(false);


    // const handleChange = () => {
    //     setPressed(!pressed);
    // }

    return (
        <div className="container-neon">
            <Link to="/"><span>Learn</span></Link>
            <Link to="/game"><span>Play</span></Link>
        </div>


        // <div>
        //     <button {...props} onClick={handleChange}>
        //         {/* {pressed ? "Нажата" : "Нажми меня"} */}
        //         {/* {pressed ? <AddToCartForm /> : "Translate"} */}
        //     </button>
        // </div>

    );
}