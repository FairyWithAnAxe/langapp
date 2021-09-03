import React, { useState } from 'react'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import EditDelForm from './TrEditDelForm';

export default function SaveCancelForm(props) {

    const [pressed, setPressed] = useState(false);


    const handleChange = () => {
        setPressed(!pressed);
    }

    return (
        <>


            {pressed
                ? <EditDelForm />
                : <><button className="tr-btn"><FontAwesomeIcon icon={faCheckSquare} className="icon" /></button>
                    <button {...props} onClick={handleChange} className="tr-btn"><FontAwesomeIcon icon={faWindowClose} className="icon" /></button>
                </>}



            {/* <FontAwesomeIcon icon={faWindowClose} className="icon" /></button> */}
            {/* <button {...props} onClick={handleChange} className="tr-btn">
                {pressed ? <SaveCancelForm /> : <FontAwesomeIcon icon={faEdit} className="icon" />}
            </button>
            <button className="tr-btn"><FontAwesomeIcon icon={faTrashAlt} className="icon" /></button> */}
        </>

    );
}


// class SaveCancelForm extends React.Component {
//     render() {
//         return (

//             <>
//                 <button className="tr-btn"><FontAwesomeIcon icon={faCheckSquare} className="icon" /></button>
//                 <button className="tr-btn"><FontAwesomeIcon icon={faWindowClose} className="icon" /></button>
//             </>

//         );
//     }
// }

// export default SaveCancelForm;