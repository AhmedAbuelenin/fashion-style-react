import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import rootReducer from './rootReducer'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ['featuredCollection']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer
