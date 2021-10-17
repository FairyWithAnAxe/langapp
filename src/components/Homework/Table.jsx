import React from 'react'
//import wordsAPI from '../wordsAPI.json'
import { useWords } from '../../context/WordsContext'
import TableRow from './TableRow';
import './Table.css'
import AddNewWord from './AddNewWord';
import Loader from '../Loader/Loader';





function Table() {

    const { words, setWords, loading, setLoading, error, setError } = useWords();

    return (
        <>

            <table className="table_dark">
                <tr>
                    <th>#</th>
                    <th>English</th>
                    <th>Transcription</th>
                    <th>Russian</th>
                    <th>Tag</th>
                    <th></th>
                </tr>

                {words && words.map((word) =>
                    <TableRow key={word.id} word={word} />
                )}



            </table>

            <AddNewWord />

        </>
    )
}

export default Table






// class Table extends React.Component {
//     render() {

//         // const { id, english, transcription, russian, tags, isEdit } = this.props;

//         return (

//             <table className="table_dark">
//                 <tr>
//                     <th>#</th>
//                     <th>English</th>
//                     <th>Transcription</th>
//                     <th>Russian</th>
//                     <th>Tag</th>
//                     <th></th>
//                 </tr>

//                 {/* {wordsAPI.map((word) =>
//                     <TableRow id={word.id} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags} isEdit={word.isEdit} />
//                 )} */}

//                 {wordsAPI.map((word) =>
//                     <TableRow key={word.id} word={word} />
//                 )}

//             </table>



//         )
//     }
// }

// export default Table;