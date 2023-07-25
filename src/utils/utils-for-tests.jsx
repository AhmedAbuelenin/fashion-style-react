import {configureStore} from '@reduxjs/toolkit'
import {render} from '@testing-library/react'
import {Provider} from 'react-redux'
import Cart from '../redux/slices/Cart'
import FeaturedCollection from '../redux/slices/FeaturedCollection'
import {BrowserRouter as Router} from 'react-router-dom'
import userEvent from '@testing-library/user-event'

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: {featuredCollection: FeaturedCollection, cart: Cart},
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

export function setup(ui) {
  return {
    user: userEvent.setup(),
    ...renderWithProviders(ui)
  }
}
