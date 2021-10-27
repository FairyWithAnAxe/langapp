import React from 'react'
import errorImg from '../../assets/images/error.png'

function Error() {
    return (
        <div>
            <h2>Ooops... Something went wrong :(</h2>
            <img src={errorImg} alt="" />
        </div>
    )
}

export default Error
