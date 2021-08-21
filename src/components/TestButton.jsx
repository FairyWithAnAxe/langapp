import React, { useState } from 'react'
import AddToCartForm from './AddToCartForm';


export default function TestButton(props) {

    const [pressed, setPressed] = useState(false);


    const handleChange = () => {
        setPressed(!pressed);
    }

    return (
        <div>
            <button {...props} onClick={handleChange}>
                {/* {pressed ? "Нажата" : "Нажми меня"} */}
                {pressed ? <AddToCartForm /> : "Нажми меня"}
            </button>
        </div>

    );
}
