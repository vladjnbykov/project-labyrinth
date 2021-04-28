/* eslint-disable */
/* eslint-disable linebreak-style */

import { createSlice } from '@reduxjs/toolkit'

const paths = createSlice({

    name: 'paths',
    initialState: {
        username: null,
        path: null

    },
    reducers: {
        setUsername: (store, action) => {
            store.username = action.payload
        },

        setPath: (store, action) => {
            store.path = action.payload
        }


    }


}) 

export const generatePath = (direction) => {
    return (dispatch, getState) => {
    
        if (direction) {
            fetch('https://wk16-backend.herokuapp.com/action', {
                method: 'POST',
                headers: {
                'Content-type': 'application/json'
                },
                body: JSON.stringify({ 
                    username: getState().paths.username, 
                    type: 'move',
                    direction: `${direction}`
        
                    })
                })
                .then(res => res.json())
                .then(path => dispatch(paths.actions.setPath(path)))
        
        } else {        

        
        fetch('https://wk16-backend.herokuapp.com/start', {
            method: 'POST',
            headers: {
            'Content-type': 'application/json'
            },
            body: JSON.stringify({ username: getState().paths.username })
            })
            .then(res => res.json())
            .then(path => dispatch(paths.actions.setPath(path)))

        
        

        
      
    }
}
}



export default paths


