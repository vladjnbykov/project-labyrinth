/* eslint-disable linebreak-style */
import React from 'react'
import { useSelector } from 'react-redux'

const GameScreen = () => {
    const path = useSelector(store => store.paths.path)
    return (
        <div>This is your path: {path.description}</div>

    )

}

export default GameScreen