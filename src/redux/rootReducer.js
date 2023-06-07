import {combineReducers} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'
import Cart from './slices/Cart'
import FeaturedCollection from './slices/FeaturedCollection'

const cartConfig = {
  key: 'cart',
  storage,
  version: 1,
  stateReconciler: autoMergeLevel2,
  whitelist: ['data']
}

const rootReducer = combineReducers({
  featuredCollection: FeaturedCollection,
  cart: persistReducer(cartConfig, Cart)
})

export default rootReducer
