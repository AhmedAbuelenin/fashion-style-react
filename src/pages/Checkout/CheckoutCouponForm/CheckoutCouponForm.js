import {useState} from 'react'
import {Link} from 'react-router-dom'
import {CouponForm} from '../../../components'
import './CheckoutCouponForm.scss'

const CheckoutCouponForm = ({coupon}) => {
  const [isFormVisible, setIsFormVisible] = useState(false)

  const formContainerClass = isFormVisible
    ? 'checkout-coupon__description-form-container--visible'
    : ''

  const toggleFormVisibility = () => {
    setIsFormVisible(isVisible => !isVisible)
  }

  return (
    <div data-testid='checkout-coupon-form' className='checkout-coupon'>
      <div className='checkout-coupon__title'>
        <span>Have a coupon?</span>
        <Link
          to='#'
          onClick={toggleFormVisibility}
          className='checkout-coupon__link'>
          Click here to enter your code
        </Link>
      </div>
      <div
        className={`checkout-coupon__description-form-container ${formContainerClass}`}>
        <p className='checkout-coupon__description'>
          If you have a coupon code, please apply it below.
        </p>
        <CouponForm formClass={'checkout-coupon__form'} />
      </div>
    </div>
  )
}

export default CheckoutCouponForm
