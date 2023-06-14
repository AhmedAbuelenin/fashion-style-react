import {combineReducers} from '@reduxjs/toolkit'
import {persistReducer} from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'
import Cart from './slices/Cart'
import FeaturedCollection from './slices/FeaturedCollection'
import BillingDetails from './slices/BillingDetails'

const cartConfig = {
  key: 'cart',
  storage,
  version: 1,
  stateReconciler: autoMergeLevel2,
  whitelist: ['data']
}

const billingDetailsConfig = {
  key: 'billingDetails',
  storage,
  version: 1,
  stateReconciler: autoMergeLevel2
}

const rootReducer = combineReducers({
  featuredCollection: FeaturedCollection,
  cart: persistReducer(cartConfig, Cart),
  billingDetails: persistReducer(billingDetailsConfig, BillingDetails)
})

export default rootReducer
