/* eslint-disable */

/* eslint-disable linebreak-style */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import paths, { generatePath } from '../reducers/paths'
import './startScreen.css'

const StartScreen = () => {
    const [inputValue, setInputValue] = useState('')

    const dispatch = useDispatch()

    const onUsernameSet = () => {
        dispatch(paths.actions.setUsername(inputValue))
        dispatch(generatePath())
    }

    return (
        <div className="start-game">
            <h2>Welcome to labyrinth!</h2>
            <h4> Enter username and start the game!!</h4>
            <input className="input"
                type="text"
                value={inputValue}
                onChange={event => setInputValue(event.target.value)}
            />    
            <button className="start-btn" onClick={onUsernameSet}>&nbsp;Start<span></span></button>
        </div>

    )
}

export default StartScreen