import React from 'react'
import EditDelForm from './TrEditDelForm';
import SaveCancelForm from './TrSaveCancelForm';




class Tr extends React.Component {
    render() {

        const { id, english, transcription, russian, tags, isEdit } = this.props;

        return (

            <tr>
                <td>{id}</td>
                <td>{english}</td>
                <td>{transcription}</td>
                <td>{russian}</td>
                <td>{tags}</td>

                {/* <EditDelForm />
            <SaveCancelForm /> */}

                <td>{isEdit ? <SaveCancelForm /> : <EditDelForm />}</td>

            </tr>

        );
    }
}

export default Tr;