/* eslint-disable linebreak-style */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import paths, { generatePath } from 'reducers/paths'
import { Button } from 'nes-react'

import './gameScreen.css'

const GameScreen = () => {
    const path = useSelector((store) => store.paths.path)

    const dispatch = useDispatch()

    const onPathChoice = (direction) => {
        dispatch(generatePath(direction))
    }

    const onPathRevert = () => {
        dispatch(paths.actions.setPreviousPath())
    }
    return (

        <div className="game-screen">

            <div className="game-wrapper">

                <h3>{path.description}</h3>
                <h4>Do you dare to go:</h4>
                <div className="directions">
                    {path.actions.map((action) => (

                        <Button primary type="button" key={action.direction} onClick={() => onPathChoice(action.direction)}>{action.direction} </Button>
                    ))}

                </div>
                <div className="back">
                    <button type="button" className="btn-back" onClick={onPathRevert}>BACK</button>
                </div>

            </div>

        </div>

    )
}

export default GameScreen