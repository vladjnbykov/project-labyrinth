/* eslint-disable linebreak-style */
/* eslint-disable */

import React from 'react'
import { useSelector } from 'react-redux'

import StartScreen from './StartScreen'
import GameScreen from './GameScreen'


const Paths = () => {
    const path = useSelector(store => store.paths.path)
    
    return (
        <div>
            {path
                ? <GameScreen /> 
                : <StartScreen />
            }
        </div>
    
    )

    
    
}

export default Paths