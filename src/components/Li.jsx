import React from 'react'




class Li extends React.Component {
    render() {
        //здесь мы берем конкретные свойства, которые будут задаваться 
        //при вызове этого компонента
        //const { name } = this.props;
        const { id, english, russian } = this.props;
        return (

            <li key={id}>{english} - {russian}</li>



            // <ul className="list">
            //     <li>Word 1</li>
            //     <li>Word 2</li>
            //     <li>Word 3</li>
            // </ul>
        );
    }
}

export default Li;