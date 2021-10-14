import React, { useState, useRef, useEffect } from 'react'
import TableButton from './TableButton';
import { useWords } from '../../context/WordsContext'

function AddNewWord() {

    const { words, setWords, loading, setLoading, error, setError, loadData } = useWords()

    const [newWord, setNewWord] = useState({
        // id: '',
        english: '',
        transcription: '',
        russian: '',
        tags: ''
    })

    const handleInputChange = (e) => {

        setNewWord({ ...newWord, [e.target.name]: e.target.value })

    }

    const onSave = () => {
        fetch(`/api/words/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                english: newWord.english,
                transcription: newWord.transcription,
                russian: newWord.russian,
                tags: newWord.tags
            })
        })
            .then(response => {
                if (response.ok) { //Проверяем что код ответа 200
                    return response.json();
                } else {
                    throw new Error('Something went wrong ...');
                }
            })
            .then(setNewWord({
                english: "",
                transcription: "",
                russian: "",
                tags: "",
            }))
            .then(() => { loadData() })
    }

    return (
        <tr>
            {/* <td>{newWord.id}</td> */}
            <td>
                <input type="text"
                    className={newWord.english.length ? 'input' : 'error'}
                    name="english"
                    placeholder={newWord.english.length ? 'english' : "Fill in english"}
                    value={newWord.english}
                    onChange={handleInputChange}
                />
            </td>
            <td>
                <input type="text"
                    className={newWord.transcription.length ? 'input' : 'error'}
                    name="transcription"
                    placeholder={newWord.transcription.length ? 'transcription' : "Fill in transcription"}
                    value={newWord.transcription}
                    onChange={handleInputChange}
                />
            </td>
            <td>
                <input type="text"
                    className={newWord.russian.length ? 'input' : 'error'}
                    name="russian"
                    placeholder={newWord.russian.length ? 'russian' : "Fill in russian"}
                    value={newWord.russian}
                    onChange={handleInputChange}
                />
            </td>
            <td>
                <input type="text"
                    className={newWord.tags.length ? 'input' : 'error'}
                    name="tags"
                    placeholder={newWord.tags.length ? 'tag' : "Fill in tag"}
                    value={newWord.tags}
                    onChange={handleInputChange}
                />
            </td>
            <td>
                <TableButton button="Save" onClick={onSave} />
            </td>
        </tr>
    )
}

export default AddNewWord

