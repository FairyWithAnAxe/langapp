import React from 'react'
import Button from './Button';





class Card_2 extends React.Component {
    render() {

        const { english, transcription, russian, tags, id } = this.props;

        return (

            <div className="box">
                <span></span>
                <div className="content">
                    <h2>{english}</h2>
                    <p>{transcription}</p>
                    <p>{russian}</p>
                    <p>{tags}</p>

                    <a href="#">Translate</a>
                </div>

            </div >
        );
    }
}

export default Card_2;