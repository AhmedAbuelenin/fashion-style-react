import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  data: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItem: (state, action) => {
      let isExist = false
      const _payload = action.payload

      state.data = state.data.map(item => {
        if (item.code === _payload.code) {
          isExist = true
          return {...item, quantity: item.quantity + 1}
        }
        return item
      })

      if (!isExist) {
        state.data.push({..._payload, quantity: 1})
      }
    },
    removeCartItem: (state, action) => {
      state.data = state.data.filter(item => item.code !== action.payload)
    }
  }
})

export const {setCartItem, removeCartItem} = cartSlice.actions

export default cartSlice.reducer
