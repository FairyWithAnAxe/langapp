import React from 'react'

function TableButton(props) {
    return (
        <button {...props}>{props.button}</button>
    )
}

export default TableButton













// import React from 'react'

// const btn = [{
//     name: "Save"
// },
// {
//     name: "Del"
// },
// {
//     name: "Cancel"
// },
// {
//     name: "Edit"
// }]

// class Tr_btn extends React.Component {
//     render() {
//         return (

//             <>
//                 <button className="tr-btn">1</button>
//             </>

//         );
//     }
// }

// export default Tr_btn;