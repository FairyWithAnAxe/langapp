import React from 'react'
import Button from './Button';





class Card_2 extends React.Component {
    render() {

        const { english, transcription, russian, tags, id } = this.props;

        return (
            <div className="container">
                <div className="box">
                    <span></span>
                    <div className="content">
                        <h2>{english}</h2>
                        <p>{transcription}</p>
                        <p>{russian}</p>
                        <p>{tags}</p>

                        <a href="#">Translate</a>
                    </div>
                </div>
                <div className="box">
                    <span></span>
                    <div className="content">
                        <h2>{english}</h2>
                        <p>{transcription}</p>
                        <p>{russian}</p>
                        <p>{tags}</p>
                        <a href="#">Translate</a>
                    </div>
                </div>
                <div className="box">
                    <span></span>
                    <div className="content">
                        <h2>{english}</h2>
                        <p>{transcription}</p>
                        <p>{russian}</p>
                        <p>{tags}</p>
                        <a href="#">Translate</a>
                    </div>
                </div>
                {/* <div className="box">
                    <span></span>
                    <div className="content">
                        <h2>Card Two</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A eum optio, labore libero laborum nobis totam dolorum adipisci aliquid, suscipit asperiores nihil velit facere id repellat cum animi corporis. Rerum?</p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="box">
                    <span></span>
                    <div className="content">
                        <h2>Card Three</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A eum optio, labore libero laborum nobis totam dolorum adipisci aliquid, suscipit asperiores nihil velit facere id repellat cum animi corporis. Rerum?</p>
                        <a href="#">Read More</a>
                    </div>
                </div> */}
            </div >
        );
    }
}

export default Card_2;