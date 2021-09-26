import React, { useState, useRef } from 'react'
import TableButton from './TableButton';




function TableRow({ word }) {

    const { id, english, transcription, russian, tags } = word

    const [isSelected, toggleSelected] = useState(false)

    const [isButtonDisabled, setButtonDisabled] = useState(false)

    const [inputError, setInputError] = useState(false)

    const handleError = () => {
        setInputError(true)
        setButtonDisabled(true)
    }

    //const isButtonDisabled = text.length === 0;

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

    // const inputFocus = useRef(null)
    // inputFocus.current.focus()

    const handleInputChange = (e) => {

        if (e.target.value === '') {
            handleError()
            setNewWord({ ...newWord, [e.target.name]: "" })
            // setButtonDisabled(false)
            // setNewWord({ ...newWord, [e.target.name]: e.target.value })

        }
        //setButtonDisabled(false)
        setNewWord({ ...newWord, [e.target.name]: e.target.value })
        //else {


        // }

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
                                    className={newWord.english.length ? 'input' : 'error'}
                                    name="english"
                                    value={newWord.english}
                                    onChange={handleInputChange}
                                />
                            </td>
                            <td>
                                <input type="text"
                                    className={newWord.transcription.length ? 'input' : 'error'}
                                    name="transcription"
                                    value={newWord.transcription}
                                    onChange={handleInputChange}
                                />
                            </td>
                            <td>
                                <input type="text"
                                    className={newWord.russian.length ? 'input' : 'error'}
                                    name="russian"
                                    value={newWord.russian}
                                    onChange={handleInputChange}
                                />
                            </td>
                            <td>
                                <input type="text"
                                    className={newWord.tags.length ? 'input' : 'error'}
                                    name="tags"
                                    value={newWord.tags}
                                    onChange={handleInputChange}
                                />
                            </td>
                            <td>
                                <TableButton button="Save" onClick={handleChange} disabled={isButtonDisabled} />
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