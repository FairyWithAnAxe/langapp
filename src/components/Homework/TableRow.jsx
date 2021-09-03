import React from 'react'
import EditDelForm from './TrEditDelForm';
import SaveCancelForm from './TrSaveCancelForm';




class TableRow extends React.Component {
    render() {

        const { id, english, transcription, russian, tags, isEdit } = this.props;

        return (

            <tr>
                <td>{id}</td>
                <td>{english}</td>

                {/* <td>{transcription}</td> */}
                {transcription && <td>{transcription}</td>
                } {!transcription && <td>--</td>}

                {/* <td>{russian}</td> */}
                {russian && <td>{russian}</td>
                } {!russian && <td>--</td>}

                {/* <td>{tags}</td> */}
                {tags && <td>{tags}</td>
                } {!tags && <td>--</td>}

                {/* <EditDelForm />
            <SaveCancelForm /> */}

                {/* <td>{isEdit ? <SaveCancelForm /> : <EditDelForm />}</td> */}
                <td><EditDelForm /></td>

            </tr>

        );
    }
}

export default TableRow;