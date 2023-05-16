import {getFeaturedCollection} from '../thunk/index'
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  status: 'ok',
  loading: false,
  data: []
}

const featuredCollectionSlice = createSlice({
  name: 'featuredCollection',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload
    },
    setFeaturedSelected: (state, action) => {
      state.data = state.data.map(item => {
        if (item.code === action.payload) {
          return {...item, selected: true}
        }
        return item
      })
    },
    toggleItemLoading: (state, action) => {
      state.data = state.data.map(item => {
        if (item.code === action.payload) {
          return {...item, loading: !item.loading}
        }
        return item
      })
    }
  },
  extraReducers: builder => {
    builder.addCase(getFeaturedCollection.pending, (state, action) => {
      state.status = 'ok'
      state.loading = true
    })
    builder.addCase(getFeaturedCollection.fulfilled, (state, action) => {
      state.status = 'ok'
      state.loading = false
    })
    builder.addCase(getFeaturedCollection.rejected, (state, action) => {
      state.status = action.payload
      state.loading = false
    })
  }
})

export const {setData, setFeaturedSelected, toggleItemLoading} =
  featuredCollectionSlice.actions

export default featuredCollectionSlice.reducer
