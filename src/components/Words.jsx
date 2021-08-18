import React from 'react'



class Words extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: []
        }
    }

    componentDidMount() {
        fetch('/api/words')
            .then((response) => response.json())
            .then((response) => this.setState({ words: response }))
    }

    render() {
        const { words } = this.state

        return (
            <ol>
                {
                    words.map(word => {
                        return <li key={word.id}>{word.english} - {word.russian}</li>
                    })
                }
            </ol>
        )
    }
}

export default Words;