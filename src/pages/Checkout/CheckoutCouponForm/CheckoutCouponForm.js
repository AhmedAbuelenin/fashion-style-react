import {useState} from 'react'
import {Link} from 'react-router-dom'
import {CouponForm} from '../../../components'
import './CheckoutCouponForm.scss'

const CheckoutCouponForm = ({onApplyCoupon}) => {
  const [isFormVisible, setIsFormVisible] = useState(false)

  const formContainerClass = isFormVisible
    ? 'checkout-coupon-form__description-form--visible'
    : ''

  const toggleFormVisibility = () => {
    setIsFormVisible(isVisible => !isVisible)
  }

  return (
    <div className='checkout-coupon-form'>
      <div className='checkout-coupon-form__title'>
        <span>Have a coupon?</span>
        <Link
          to='#'
          onClick={toggleFormVisibility}
          className='checkout-coupon-form__link'>
          Click here to enter your code
        </Link>
      </div>
      <div
        className={`checkout-coupon-form__description-form ${formContainerClass}`}>
        <p className='checkout-coupon-form__description'>
          If you have a coupon code, please apply it below.
        </p>
        <CouponForm {...{onApplyCoupon}} />
      </div>
    </div>
  )
}

export default CheckoutCouponForm
