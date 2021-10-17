import React from 'react'
import Loader from '../Loader/Loader'

function LoadedComponent({ loading, error, children }) {

    if (loading) {
        return <Loader />
    }

    if (error) {
        return <p>{error.message}</p>
    }

    return (
        children
    )
}

export default LoadedComponent
