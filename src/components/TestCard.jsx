import React from 'react'

import wordsAPI from '../components/wordsAPI.json'
import TestButton from './TestButton'


class TestCard extends React.Component {
    render() {

        const { english, transcription, russian, tags } = this.props;
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{english}</h4>
                    <p className="card-text">{transcription}</p>
                    <p className="card-text">{russian}</p>
                    <p className="card-text">{tags}</p>
                </div>
                <div className="card-footer">
                    <TestButton />
                </div>
            </div>
        );
    }
}

export default TestCard;