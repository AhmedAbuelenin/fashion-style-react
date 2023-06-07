import {createAsyncThunk} from '@reduxjs/toolkit'
import {setData} from '../slices/FeaturedCollection'
import {getFeaturedProducts} from '../../services'

export const getFeaturedCollection = createAsyncThunk(
  'featuredCollection/data',
  (_, thunkAPI) =>
    getFeaturedProducts()
      .then(({results}) => {
        return thunkAPI.dispatch(setData(results))
      })
      .catch(error => {
        return thunkAPI.rejectWithValue(error.message)
      })
)
