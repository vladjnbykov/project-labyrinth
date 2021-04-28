/* eslint-disable */

/* eslint-disable linebreak-style */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import paths, { generatePath } from '../reducers/paths'

const StartScreen = () => {
    const [inputValue, setInputValue] = useState('')

    const dispatch = useDispatch()

    const onUsernameSet = () => {
        dispatch(paths.actions.setUsername(inputValue))
        dispatch(generatePath())
    }

    return (
        <div>
            <p>Welcome to labyrinth! Enter username and start the game!!</p>
            <input
                type="text"
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}
            />    
            <button onClick={onUsernameSet}>Start the game!</button>
        </div>

    )
}

export default StartScreen