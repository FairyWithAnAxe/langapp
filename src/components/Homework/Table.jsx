import React, { useEffect } from 'react'
//import wordsAPI from '../wordsAPI.json'
import { useWords } from '../../context/WordsContext'
import TableRow from './TableRow';
import './Table.css'
import AddNewWord from './AddNewWord';
import Loader from '../Loader/Loader';
import { observer, inject } from "mobx-react";





// const Table = inject(['wordsStore'])(observer(({ wordsStore }) => {

const Table = inject(['wordsStore'])(observer(({ wordsStore: { words, loadData, saveNewWord, deleteWord, updateWord } }) => {

    // const words = wordsStore.words
    // const loadData = wordsStore.loadData
    // const saveNewWord = wordsStore.saveNewWord
    // const deleteWord = wordsStore.deleteWord
    // const updateWord = wordsStore.updateWord

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="table-wrapper">

            <table className="table_dark">
                <tr>
                    {/* <th>#</th> */}
                    <th>English</th>
                    <th>Transcription</th>
                    <th>Russian</th>
                    <th>Tag</th>
                    <th></th>
                </tr>

                {words && words.map((word) =>
                    <TableRow key={word.id} word={word} deleteWord={deleteWord} updateWord={updateWord} />
                )}



            </table>

            <AddNewWord saveNewWord={saveNewWord} />

        </div>
    )
}))

export default Table