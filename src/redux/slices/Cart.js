import {createSlice} from '@reduxjs/toolkit'
import {convertArrayToObject} from '../../utils/convertArrayToObject'
import {convertObjToArray} from '../../utils/convertObjToArray'

const initialState = {
  data: [],
  isCartUpdateNeeded: false
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
    },
    updateCartItems: (state, action) => {
      const obj = convertArrayToObject(state.data)

      action.payload.forEach(item => {
        if (obj[item.code]) {
          obj[item.code].quantity = item.quantity
        }
      })

      const updatedArr = convertObjToArray(obj)

      state.data = updatedArr
    }
  }
})

export const {setCartItem, removeCartItem, updateCartItems} = cartSlice.actions

export default cartSlice.reducer
