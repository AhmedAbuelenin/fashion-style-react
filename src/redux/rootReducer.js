import FeaturedCollection from './slices/FeaturedCollection'
import Cart from './slices/Cart'
import {combineReducers} from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  featuredCollection: FeaturedCollection,
  cart: Cart
})

export default rootReducer
