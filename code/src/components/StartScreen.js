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

    const onStartBtn = () => {
        if (inputValue) {
            return (
                <button type="button" className="start-btn" onClick={onUsernameSet}>
                    &nbsp;Start<span />
                </button>
            )
        }
    }

    return (
        <div className="start-game">
            <div className="start-wrapper">
                <h1>LABYRINTH</h1>
                <h4 className="name"> Name yourself and start the journey!!</h4>
                <input
                  className="input"
                  type="text"
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                  required />
                {onStartBtn()}
            </div>

        </div>
    )
}

export default StartScreen