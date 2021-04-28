/* eslint-disable */

/* eslint-disable linebreak-style */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import paths, { generatePath } from 'reducers/paths'

const GameScreen = () => {
    const path = useSelector(store => store.paths.path)

    const onPathChoice = (way) => {
        dispatch(generatePath(way))
    }
    return (
        <div>
            <h3>This is your path: {path.description}</h3>
            {path.actions.map(action => (
                <button 
                key={action.direction}
                onClick={() => onPathChoice(action.direction)}
                >{action.direction}</button>
            ))}
            
            
        </div>
        

    )

}

export default GameScreen