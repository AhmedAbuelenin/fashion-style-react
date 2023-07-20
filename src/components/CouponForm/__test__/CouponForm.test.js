import {cleanup, fireEvent, screen, waitFor} from '@testing-library/react'
import {renderWithProviders} from '../../../utils/utils-for-tests'
import CouponForm from '../CouponForm'

afterEach(cleanup)

describe('CouponForm', () => {
  it('should display an error message if coupon is empty', async () => {
    renderWithProviders(<CouponForm />)

    fireEvent.click(screen.getByText('APPLY COUPON'))

    const errMsg = await screen.findByText('Field is required')

    expect(errMsg).toBeInTheDocument()
  })

  it('should display an error message if coupon is not valid', async () => {
    renderWithProviders(<CouponForm onApplyCoupon={jest.fn()} />)

    const couponInput = screen.getByPlaceholderText('Coupon code')

    fireEvent.change(couponInput, {target: {value: 'abn'}})
    fireEvent.click(screen.getByText('APPLY COUPON'))

    const errMsg = await screen.findByText(
      'Invalid coupon code',
      {},
      {
        timeout: 3000
      }
    )

    expect(errMsg).toBeInTheDocument()
  })

  it('should display check mark if coupon is valid', async () => {
    renderWithProviders(<CouponForm onApplyCoupon={jest.fn()} />)

    const couponInput = screen.getByPlaceholderText('Coupon code')

    fireEvent.change(couponInput, {target: {value: 'testCoupon'}})
    fireEvent.click(screen.getByText('APPLY COUPON'))

    await waitFor(
      () => {
        expect(couponInput).toHaveClass('coupon-form__input-check-bg')
      },
      {timeout: 3000}
    )
  })
})
