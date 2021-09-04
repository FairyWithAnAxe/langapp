import React, { useState } from 'react'
import TableButton from './TableButton';




// function TableRow({ word }) {

//     const [isSelected, toggleSelected] = useState(false)
//     const [value, setValue] = useState({word})
//     const { id, english, transcription, russian, tags } = word

//     const handleChange = () => {
//         toggleSelected(!isSelected);
//     }

//     return (

//         {
//             isSelected ?
//                 ( <tr>
//                     <tr>
//                     <td>{word.id}</td>
//                     <td><input onBlur={handleChange} onChange={(e) => setValue(e.target.value)} value={value} /></td>
//                     <td><input onBlur={handleChange} onChange={(e) => setValue(e.target.value)} value={value} /></td>
//                     <td><input onBlur={handleChange} onChange={(e) => setValue(e.target.value)} value={value} /></td>
//                     <td><input onBlur={handleChange} onChange={(e) => setValue(e.target.value)} value={value} /></td>
//                     <td>
//                         <TableButton button="Save" onClick={handleChange} />
//                         <TableButton button="Cancel" onClick={() => { handleChange(); setValue(word.english); }} />
//                     </td>
//                 </tr>
//                 </tr > ) : (<tr>
//                     <td>{word.id}</td>
//                     <td>{word.english}</td>
//                     <td>{word.transcription}</td>
//                     <td>{word.russian}</td>
//                     <td>{word.tags}</td>
//                     <td>
//                         <TableButton button="Edit" onClick={handleChange} />
//                         <TableButton button="Del" />
//                     </td>
//                 </tr>)
//         }
//             )
// }

// export default TableRow




function TableRow({ word }) {

    const [isSelected, toggleSelected] = useState(false)
    const [value, setValue] = useState(word.english)
    const { id, english, transcription, russian, tags } = word

    const handleChange = () => {
        toggleSelected(!isSelected);
    }

    return (
        <tr>
            <td>{word.id}</td>

            {isSelected
                ? <td><input
                    onBlur={handleChange}
                    onChange={(e) => setValue(e.target.value)}
                    value={value} /></td>
                : <td>{value}</td>
            }


            {word.transcription && <td>{word.transcription}</td>
            } {!word.transcription && <td>--</td>}


            {word.russian && <td>{word.russian}</td>
            } {!word.russian && <td>--</td>}


            {word.tags && <td>{word.tags}</td>
            } {!word.tags && <td>--</td>}


            {isSelected
                ? <td>
                    <TableButton button="Save" onClick={handleChange} />
                    <TableButton button="Cancel" onClick={() => { handleChange(); setValue(word.english); }} />
                </td>
                : <td>
                    <TableButton button="Edit" onClick={handleChange} />
                    <TableButton button="Del" />
                </td>
            }


        </tr>
    )
}

export default TableRow





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