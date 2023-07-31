import Cart from '../Cart'
import {renderWithProviders, setup} from '../../../utils/utils-for-tests'
import {screen} from '@testing-library/react'

describe('Cart', () => {
  const item = {
    code: '23_group_1245',
    name: 'T-shirt',
    price: 25,
    quantity: 2,
    image: 'https://nicet-shirt/'
  }

  const initialState = {
    cart: {
      data: [item],
      isCartUpdateNeeded: false,
      coupon: {status: false, value: ''},
      totals: {price: 0, qty: 0}
    }
  }

  it('should display CartTableList if there are items in the cart', () => {
    renderWithProviders(<Cart />, {
      preloadedState: initialState
    })

    const table = screen.getByTestId('cart-items-table')

    expect(table).toBeInTheDocument()
  })

  it('should display CartActions if there are items in the cart', () => {
    renderWithProviders(<Cart />, {
      preloadedState: initialState
    })
    const cartActions = screen.getByTestId('cart-actions')

    expect(cartActions).toBeInTheDocument()
  })

  it('should display CartTotals if there are items in the cart', () => {
    renderWithProviders(<Cart />, {
      preloadedState: initialState
    })
    const cartTotals = screen.getByTestId('cart-totals')

    expect(cartTotals).toBeInTheDocument()
  })

  it('should enable update cart button if item quantity is changed', async () => {
    const {user} = setup(<Cart />, {
      preloadedState: initialState
    })

    const incrementButton = screen.getByRole('button', {
      name: /increment quantity/i
    })
    const updateCartButton = screen.getByTestId('update-cart-button')

    await user.click(incrementButton)

    expect(updateCartButton).toBeEnabled()
  })

  it('should disable update cart button when is clicked', async () => {
    const {user} = setup(<Cart />, {
      preloadedState: initialState
    })

    const incrementButton = screen.getByRole('button', {
      name: /increment quantity/i
    })
    const updateCartButton = screen.getByTestId('update-cart-button')

    await user.click(incrementButton)
    await user.click(updateCartButton)

    expect(updateCartButton).toBeDisabled()
  })

  it('should display a message and a button if cart is empty', () => {
    renderWithProviders(<Cart />)

    const msg = screen.getByTestId('no-products')
    const shopLink = screen.getByTestId('return-to-shop')

    expect(msg).toBeInTheDocument()
    expect(shopLink).toBeInTheDocument()
  })

  it('should navigate to /shop route if return to shop link is clicked', async () => {
    const {user} = setup(<Cart />)

    const shopLink = screen.getByTestId('return-to-shop')

    await user.click(shopLink)

    expect(window.location.pathname).toBe('/shop')
  })
})
