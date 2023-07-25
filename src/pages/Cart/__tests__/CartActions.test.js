import {screen} from '@testing-library/react'
import {renderWithProviders, setup} from '../../../utils/utils-for-tests'
import CartActions from '../CartActions/CartActions'

describe('CartActions', () => {
  it('should display coupon form', () => {
    renderWithProviders(<CartActions />)

    const couponForm = screen.getByTestId('coupon-form')

    expect(couponForm).toBeInTheDocument()
  })

  it('should display update cart button', async () => {
    const {user} = setup(<CartActions />)

    const button = screen.getByTestId('update-cart-button')

    await user.click(button)

    expect(button).toBeInTheDocument()
  })

  it('should disable update cart button when is clicked', async () => {
    const {user} = setup(<CartActions />)

    const button = screen.getByTestId('update-cart-button')

    await user.click(button)

    expect(button).toBeDisabled()
  })
})
