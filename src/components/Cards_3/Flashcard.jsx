import React from 'react'
import Button from './Button';



class Flashcard extends React.Component {
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
                    <Button />
                </div>
            </div>
        );
    }
}

export default Flashcard;