/* eslint-disable */
/* eslint-disable linebreak-style */

import { createSlice } from '@reduxjs/toolkit'

const paths = createSlice({

    name: 'paths',
    initialState: {
        username: null,
        path: null,
        history: [],
        error: null,
        loading: false

    },
    reducers: {
        setUsername: (store, action) => {
            store.username = action.payload
        },

        setPath: (store, action) => {
            if (store.path !== null) {
                store.history = [...store.history, store.path]
            }
            store.path = action.payload
        },

        setPreviousPath: (store, action) => {
            store.path = store.history[store.history.length - 1]
            store.history = store.history.slice(0, store.history.length - 1)
        },

        setError: (store, action) => {
            store.error = action.payload
        }, 


        setLoading: (store, action) => {
            store.loading = action.payload
        }


    }


}) 

export const generatePath = (direction) => {
    return (dispatch, getState) => {
        dispatch(paths.actions.setLoading(true))
        
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
                .then(res => {
                    if (res.ok) {
                        dispatch(paths.actions.setError(null))
                        return res.json()
                    } else {
                        throw new Error(res.statusText)
                    }
                })
                .then(path => dispatch(paths.actions.setPath(path)))
                .catch(error => console.error('Error is:', error))
                .finally(() => dispatch(paths.actions.setLoading(false)))

        } else {        

            fetch('https://wk16-backend.herokuapp.com/start', {
                method: 'POST',
                headers: {
                'Content-type': 'application/json'
                },
                body: JSON.stringify({ username: getState().paths.username })
                })
                .then(res => {
                    if (res.ok) {
                        dispatch(paths.actions.setError(null))
                        return res.json()
                    } else {
                        throw new Error(res.statusText)
                    }
                })


                .then(path => dispatch(paths.actions.setPath(path)))
                .catch(error => dispatch(paths.actions.setError(error.message)))
                .finally(() => dispatch(paths.actions.setLoading(false)))
                



        
        

        
      
    }
}
}



export default paths


