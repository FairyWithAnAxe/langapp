import React from 'react'
import error from '../assets/images/error.png'

function Error() {
    return (
        <div>
            <h2>Ooops... Something went wrong :(</h2>
            <img src={error} alt="" />
        </div>
    )
}

export default Error
