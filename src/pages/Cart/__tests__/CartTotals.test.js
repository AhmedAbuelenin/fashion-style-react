import {cleanup, screen} from '@testing-library/react'
import {CartTotals} from '..'
import {renderWithProviders, setup} from '../../../utils/utils-for-tests'

afterEach(cleanup)

describe('CartTotals', () => {
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
      coupon: {status: true, value: 'testCoupon'},
      totals: {price: 50, qty: 2}
    }
  }

  it('should display cart totals heading', () => {
    renderWithProviders(<CartTotals />)

    const heading = screen.getByTestId('cart-totals-heading')

    expect(heading).toBeInTheDocument()
  })

  it('should display three subtitles if used coupon is valid', () => {
    renderWithProviders(<CartTotals />, {preloadedState: initialState})

    const items = screen.getAllByTestId('cart-totals-item')

    expect(items.length).toBe(3)
  })

  it('should display two subtitles if used coupon is not valid or unused', () => {
    renderWithProviders(<CartTotals />, {
      preloadedState: {
        cart: {...initialState.cart, coupon: {status: false, value: ''}}
      }
    })

    const items = screen.getAllByTestId('cart-totals-item')

    expect(items.length).toBe(2)
  })

  it('should display proceed to checkout link', () => {
    renderWithProviders(<CartTotals />)

    const checkoutLink = screen.getByTestId('proceed-to-checkout-link')

    expect(checkoutLink).toBeInTheDocument()
  })

  it('should navigate to /checkout route when click on proceed to checkout link', async () => {
    const {user} = setup(<CartTotals />)

    const checkoutLink = screen.getByTestId('proceed-to-checkout-link')

    await user.click(checkoutLink)

    expect(window.location.pathname).toBe('/checkout')
  })
})
