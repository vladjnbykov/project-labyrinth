/* eslint-disable */

/* eslint-disable linebreak-style */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import paths, { generatePath } from 'reducers/paths'

import './gameScreen.css'

const GameScreen = () => {
    const path = useSelector(store => store.paths.path)

    const dispatch = useDispatch()

    const onPathChoice = (direction) => {
        dispatch(generatePath(direction))
    }
    return (
        <div className="game-screen">
            <div className="game-wrapper">
                <h3>{path.description}</h3>
                <h4>Are you dare to go:</h4>
                <div className="directions">
                    {path.actions.map(action => (
                        <button className="btn-directions"
                        key={action.direction}
                        onClick={() => onPathChoice(action.direction)}
                        >{action.direction}</button>
                    ))}
                </div>
                
            </div>
            
            
            
        </div>
        

    )

}

export default GameScreen