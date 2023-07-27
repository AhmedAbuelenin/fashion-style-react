import {configureStore} from '@reduxjs/toolkit'
import {render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import BillingDetails from '../redux/slices/BillingDetails'
import Cart from '../redux/slices/Cart'
import FeaturedCollection from '../redux/slices/FeaturedCollection'

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: {
        featuredCollection: FeaturedCollection,
        cart: Cart,
        billingDetails: BillingDetails
      },
      preloadedState
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({children}) {
    return (
      <Provider store={store}>
        <Router>{children}</Router>
      </Provider>
    )
  }
  // Return an object with the store and all of RTL's query functions
  return {store, ...render(ui, {wrapper: Wrapper, ...renderOptions})}
}

export function setup(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: {
        featuredCollection: FeaturedCollection,
        cart: Cart,
        billingDetails: BillingDetails
      },
      preloadedState
    }),
    ...renderOptions
  } = {}
) {
  return {
    user: userEvent.setup(),
    ...renderWithProviders(ui, {preloadedState, store, ...renderOptions})
  }
}
