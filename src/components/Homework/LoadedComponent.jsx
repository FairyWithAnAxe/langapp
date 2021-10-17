import React from 'react'
import Error from '../Error'
import Loader from '../Loader/Loader'

function LoadedComponent({ loading, error, children }) {

    if (loading) {
        return <Loader />
    }

    if (error) {
        return <Error />
        // return <p>{error.message}</p>
    }

    return (
        children
    )
}

export default LoadedComponent
