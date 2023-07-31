import {screen, waitFor} from '@testing-library/react'
import {setup} from '../../../utils/utils-for-tests'
import CouponForm from '../CouponForm'

describe('CouponForm', () => {
  it('should display an error message if coupon is empty', async () => {
    const {user} = setup(<CouponForm />)

    await user.click(screen.getByRole('button', {name: /apply coupon/i}))

    const errMsg = await screen.findByText(/field is required/i)

    expect(errMsg).toBeInTheDocument()
  })

  it('should display an error message if coupon is not valid', async () => {
    const {user} = setup(<CouponForm />)

    await user.type(screen.getByRole('textbox', {name: /coupon code/i}), 'abn')
    await user.click(screen.getByRole('button', {name: /apply coupon/i}))

    const errMsg = await screen.findByText(
      /invalid coupon code/i,
      {},
      {
        timeout: 5000
      }
    )

    expect(errMsg).toBeInTheDocument()
  })

  it('should display check mark if coupon is valid', async () => {
    const {user} = setup(<CouponForm />)

    const couponInput = screen.getByRole('textbox', {name: /coupon code/i})

    await user.type(couponInput, 'testCoupon')
    await user.click(screen.getByRole('button', {name: /apply coupon/i}))

    await waitFor(
      () => {
        expect(couponInput).toHaveClass('coupon-form__input-check-bg')
      },
      {timeout: 3000}
    )
  })
})
