/* eslint-disable linebreak-style */
import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import paths from './reducers/paths'

import Paths from './components/Paths'

const reducer = combineReducers({
  paths: paths.reducer
})

const store = configureStore({ reducer })

export const App = () => {

  return (
    <Provider store={store}>
      <Paths />

    </Provider>
  )
}
