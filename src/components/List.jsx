import React from 'react'
import Li from './Li';
import wordsAPI from '../components/wordsAPI.json'




class List extends React.Component {
    render() {
        return (
            <ol>
                {wordsAPI.map((word) =>
                    <Li key={word.id} english={word.english} russian={word.russian} />
                )}
            </ol>

        )
    }
}

export default List;