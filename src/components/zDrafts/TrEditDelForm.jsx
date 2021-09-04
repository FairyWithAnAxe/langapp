import React, { useState } from 'react'
import { faEdit, faHome, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SaveCancelForm from './TrSaveCancelForm';

export default function EditDelForm(props) {

    const [pressed, setPressed] = useState(false);


    const handleChange = () => {
        setPressed(!pressed);
    }

    return (
        <>

            {pressed
                ? <SaveCancelForm />
                : <><button {...props} onClick={handleChange} className="tr-btn"><FontAwesomeIcon icon={faEdit} className="icon" /></button><button className="tr-btn"><FontAwesomeIcon icon={faTrashAlt} className="icon" /></button></>}

        </>

    );
}


// class EditDelForm extends React.Component {
//     render() {
//         return (

//             <>
//                 <button className="tr-btn"><FontAwesomeIcon icon={faEdit} className="icon" /></button>
//                 <button className="tr-btn"><FontAwesomeIcon icon={faTrashAlt} className="icon" /></button>
//             </>

//         );
//     }
// }

// export default EditDelForm;