/* eslint-disable linebreak-style */
/* eslint-disable */

import React from 'react'
import { useSelector } from 'react-redux'

import StartScreen from './StartScreen'
import GameScreen from './GameScreen'

import './paths.css'


const Paths = () => {
    const path = useSelector(store => store.paths.path)
    const loading = useSelector(store => store.paths.loading)
    return (
        <div>
            {path
                ? <GameScreen /> 
                : <StartScreen />
            }

            {loading && <div className="loading-spinner">LOADING</div>}

        </div>
    
    )

    
    
}

export default Paths