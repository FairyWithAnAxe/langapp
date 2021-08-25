import React from 'react'
import { faEdit, faHome, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



class EditDelForm extends React.Component {
    render() {
        return (

            <>
                <button className="tr-btn"><FontAwesomeIcon icon={faEdit} className="icon" /></button>
                <button className="tr-btn"><FontAwesomeIcon icon={faTrashAlt} className="icon" /></button>
            </>

        );
    }
}

export default EditDelForm;