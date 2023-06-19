import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  firstName: '',
  lastName: '',
  companyName: '',
  country: '',
  state: '',
  address: '',
  phone: '',
  email: '',
  orderNotes: ''
}

const billingDetailsSlice = createSlice({
  name: 'billingDetails',
  initialState,
  reducers: {
    setBillingDetails: (_, action) => ({
      ...action.payload
    }),
    resetBillingDetails: () => ({
      ...initialState
    })
  }
})

export const {setBillingDetails, resetBillingDetails} =
  billingDetailsSlice.actions

export default billingDetailsSlice.reducer
