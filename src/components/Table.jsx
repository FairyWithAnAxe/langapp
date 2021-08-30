import React from 'react'
import wordsAPI from '../components/wordsAPI.json'
import Tr from './Tr';




class Table extends React.Component {
    render() {

        const { id, english, transcription, russian, tags, isEdit } = this.props;

        return (

            <table class="table_dark">
                <tr>
                    <th>#</th>
                    <th>English</th>
                    <th>Transcription</th>
                    <th>Russian</th>
                    <th>Tag</th>
                    <th></th>
                </tr>

                {wordsAPI.map((word) =>
                    <Tr id={word.id} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags} isEdit={word.isEdit} />
                )}

            </table>



        )
    }
}

export default Table;