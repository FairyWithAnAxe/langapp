import React, { useState } from 'react'
import TableButton from './TableButton';




function TableRow({ word }) {

    const { id, english, transcription, russian, tags } = word

    const [isSelected, toggleSelected] = useState(false)

    const [newWord, setNewWord] = useState({
        id: id,
        english: english,
        transcription: transcription,
        russian: russian,
        tags: tags
    })


    const handleChange = () => {
        toggleSelected(!isSelected);
    }

    return (
        <>
            {
                isSelected
                    ? (
                        <tr>
                            <td>{newWord.id}</td>
                            <td>
                                <input type="text"
                                    value={newWord.english}
                                    onChange={e => setNewWord({ ...newWord, english: e.target.value })}
                                />
                            </td>
                            <td>
                                <input type="text"
                                    value={newWord.transcription}
                                    onChange={e => setNewWord({ ...newWord, transcription: e.target.value })}
                                />
                            </td>
                            <td>
                                <input type="text"
                                    value={newWord.russian}
                                    onChange={e => setNewWord({ ...newWord, russian: e.target.value })}
                                />
                            </td>
                            <td>
                                <input type="text"
                                    value={newWord.tags}
                                    onChange={e => setNewWord({ ...newWord, tags: e.target.value })}
                                />
                            </td>
                            <td>
                                <TableButton button="Save" onClick={handleChange} />
                                <TableButton button="Cancel" onClick={() => { handleChange(); setNewWord({ ...word }); }} />
                            </td>
                        </tr>
                    )
                    : (
                        <tr>
                            <td>{newWord.id}</td>
                            <td>{newWord.english}</td>
                            <td>{newWord.transcription}</td>
                            <td>{newWord.russian}</td>
                            <td>{newWord.tags}</td>
                            <td>
                                <TableButton button="Edit" onClick={handleChange} />
                                <TableButton button="Del" />
                            </td>
                        </tr>
                    )
            }
        </>


    )
}

export default TableRow




    // function TableRow({ word }) {

    //     const [isSelected, toggleSelected] = useState(false)
    //     const [value, setValue] = useState(word.english)
    //     const { id, english, transcription, russian, tags } = word

    //     const handleChange = () => {
    //         toggleSelected(!isSelected);
    //     }

    //     return (
//     <tr tr >
//     <td>{word.id}</td>

// {
//     isSelected
//         ? <td><input
//             onBlur={handleChange}
//             onChange={(e) => setValue(e.target.value)}
//             value={value} /></td>
//         : <td>{value}</td>
// }


// {
//     word.transcription && <td>{word.transcription}</td>
// } { !word.transcription && <td>--</td> }


// {
//     word.russian && <td>{word.russian}</td>
// } { !word.russian && <td>--</td> }


// {
//     word.tags && <td>{word.tags}</td>
// } { !word.tags && <td>--</td> }


// {
//     isSelected
//         ? <td>
//             <TableButton button="Save" onClick={handleChange} />
//             <TableButton button="Cancel" onClick={() => { handleChange(); setValue(word.english); }} />
//         </td>
//         : <td>
//             <TableButton button="Edit" onClick={handleChange} />
//             <TableButton button="Del" />
//         </td>
// }


//         </tr >
//     )
// }

// export default TableRow





// class TableRow extends React.Component {
//     render() {

//         const { id, english, transcription, russian, tags, isEdit } = this.props;

//         return (

//             <tr>
//                 <td>{id}</td>
//                 <td>{english}</td>

//                 {/* <td>{transcription}</td> */}
//                 {transcription && <td>{transcription}</td>
//                 } {!transcription && <td>--</td>}

//                 {/* <td>{russian}</td> */}
//                 {russian && <td>{russian}</td>
//                 } {!russian && <td>--</td>}

//                 {/* <td>{tags}</td> */}
//                 {tags && <td>{tags}</td>
//                 } {!tags && <td>--</td>}

//                 {/* <EditDelForm />
//             <SaveCancelForm /> */}

//                 {/* <td>{isEdit ? <SaveCancelForm /> : <EditDelForm />}</td> */}
//                 <td><EditDelForm /></td>

//             </tr>

//         );
//     }
// }

// export default TableRow;