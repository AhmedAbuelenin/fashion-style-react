import {persistReducer} from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'
import rootReducer from './rootReducer'

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
  stateReconciler: autoMergeLevel2,
  blacklist: ['featuredCollection', 'cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer
