import {configureStore} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import {persistStore} from 'redux-persist'
import persistedReducer from './persistedReducer'

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

export const persistor = persistStore(store)
