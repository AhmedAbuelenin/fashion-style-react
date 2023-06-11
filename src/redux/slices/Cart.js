import {createSlice} from '@reduxjs/toolkit'
import {convertArrayToObject, convertObjToArray} from '../../utils'

const initialState = {
  data: [],
  isCartUpdateNeeded: false,
  coupon: {status: false, value: ''},
  totals: {price: 0, qty: 0}
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
          const oldQty = item.quantity
          const newQty = _payload.quantity || 1
          const newTotalQty = oldQty + newQty
          return {...item, quantity: newTotalQty}
        }
        return item
      })

      if (!isExist) {
        state.data = [{..._payload, quantity: 1}, ...state.data]
      }
    },
    removeCartItem: (state, action) => {
      state.data = state.data.filter(item => item.code !== action.payload)
    },
    updateCartItems: (state, action) => {
      const oldDataObj = convertArrayToObject(state.data)

      action.payload.forEach(item => {
        if (oldDataObj[item.code]) {
          oldDataObj[item.code].quantity = item.quantity
        }
      })

      const updatedDataArr = convertObjToArray(oldDataObj)

      state.data = updatedDataArr
    },
    setCoupon: (state, action) => {
      state.coupon = action.payload
    },
    setCartTotals: (state, action) => {
      state.totals = action.payload
    },
    emptyCart: () => ({
      ...initialState
    })
  }
})

export const {
  setCartItem,
  removeCartItem,
  updateCartItems,
  setCoupon,
  setCartTotals,
  emptyCart
} = cartSlice.actions

export default cartSlice.reducer
