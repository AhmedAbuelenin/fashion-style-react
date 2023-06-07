import {createSlice} from '@reduxjs/toolkit'
import {getFeaturedCollection} from '../thunk/index'

const initialState = {
  status: 'ok',
  data: []
}

const featuredCollectionSlice = createSlice({
  name: 'featuredCollection',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    },
    extraReducers: builder => {
      builder.addCase(getFeaturedCollection.pending, (state, action) => {
        state.status = 'ok'
      })
      builder.addCase(getFeaturedCollection.fulfilled, (state, action) => {
        state.status = 'ok'
      })
      builder.addCase(getFeaturedCollection.rejected, (state, action) => {
        state.status = action.payload
      })
    }
  }
})

export const {setData} = featuredCollectionSlice.actions

export default featuredCollectionSlice.reducer
