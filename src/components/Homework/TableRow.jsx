import React, { useState, useRef, useEffect } from 'react'
import TableButton from './TableButton';
import { useWords } from '../../context/WordsContext'
//import AddNewWord from './AddNewWord';




function TableRow({ word, deleteWord, updateWord }) {
    // const { words, setWords, loading, setLoading, error, setError, loadData } = useWords()

    const { id, english, transcription, russian, tags } = word

    const [isSelected, toggleSelected] = useState(false)

    const [isButtonDisabled, setButtonDisabled] = useState(false)

    const [inputError, setInputError] = useState(false)

    const handleError = () => {
        setInputError(true)
        setButtonDisabled(true)
    }

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

    const onSave = () => {

        validation();

        // updateWord(newWord)
        // handleChange()

    }

    const validation = () => {
        if (Object.values(newWord).every((prop) => prop !== '') && newWord.english.match(/^[A-Za-z0-9]*$/) && newWord.russian.match(/^[а-яё -]+$/i)) {
            updateWord(newWord)
            handleChange();
            console.log("newWord", newWord)
        }

        if (!newWord.english.match(/^[A-Za-z0-9]*$/)) {
            console.log("error: Field 'english' is not in english");
            // alert("error: Field 'english' is not in english")
        }

        if (!newWord.russian.match(/^[а-яё -]+$/i)) {
            console.log("error: Field 'russian' is not in russian");
            // alert("error: Field 'russian' is not in russian")
        }
    }

    // const validation = () => {
    //     if (Object.values(newWord).every((prop) => prop !== '') && newWord.english.match(/^[A-Za-z0-9]*$/) && newWord.russian.match(/^[а-яё -]+$/i)) {
    //         handleChange();
    //         console.log("newWord", newWord)
    //     }

    //     if (!newWord.english.match(/^[A-Za-z0-9]*$/)) {
    //         console.log("error: Field 'english' is not in english");
    //         alert("error: Field 'english' is not in english")
    //     }

    //     if (!newWord.russian.match(/^[а-яё -]+$/i)) {
    //         console.log("error: Field 'russian' is not in russian");
    //         alert("error: Field 'russian' is not in russian")
    //     }
    // }

    const handleInputChange = (e) => {
        setNewWord({ ...newWord, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        if (Object.values(newWord).some((prop) => prop === '')) {
            setButtonDisabled(true)
        } else {
            setButtonDisabled(false)
        }
    }, [newWord]);



    return (
        <>
            {
                isSelected
                    ? (
                        <tr>
                            <td>{newWord.id}</td>
                            <td>
                                {/* {newWord.english.length ? '' : <div className='error_text'>Field can't be empty</div>} */}
                                <input type="text"
                                    className={newWord.english.length ? 'input' : 'error'}
                                    name="english"
                                    placeholder={newWord.english.length ? 'english' : "Field can't be empty"}
                                    value={newWord.english}
                                    onChange={handleInputChange}
                                />
                            </td>
                            <td>
                                <input type="text"
                                    className={newWord.transcription.length ? 'input' : 'error'}
                                    name="transcription"
                                    placeholder={newWord.transcription.length ? 'transcription' : "Field can't be empty"}
                                    value={newWord.transcription}
                                    onChange={handleInputChange}
                                />
                            </td>
                            <td>
                                <input type="text"
                                    className={newWord.russian.length ? 'input' : 'error'}
                                    name="russian"
                                    placeholder={newWord.russian.length ? 'russian' : "Field can't be empty"}
                                    value={newWord.russian}
                                    onChange={handleInputChange}
                                />
                            </td>
                            <td>
                                <input type="text"
                                    className={newWord.tags.length ? 'input' : 'error'}
                                    name="tags"
                                    placeholder={newWord.tags.length ? 'tag' : "Field can't be empty"}
                                    value={newWord.tags}
                                    onChange={handleInputChange}
                                />
                            </td>
                            <td>
                                <TableButton button="Save" onClick={onSave} disabled={isButtonDisabled} />
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
                                <TableButton button="Del" onClick={() => deleteWord(id)} />
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