import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'



class SaveCancelForm extends React.Component {
    render() {
        return (

            <>
                <button className="tr-btn"><FontAwesomeIcon icon={faCheckSquare} className="icon" /></button>
                <button className="tr-btn"><FontAwesomeIcon icon={faWindowClose} className="icon" /></button>
            </>

        );
    }
}

export default SaveCancelForm;