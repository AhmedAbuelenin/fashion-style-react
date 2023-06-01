import {useCallback, useState} from 'react'
import {ContentWrapper} from '../../components'
import './Checkout.scss'
import {CheckoutCouponForm, BillingDetails} from './index'

const Checkout = () => {
  const [isCouponValid, setIsCouponValid] = useState(false)

  const handleCouponStatus = useCallback(couponStatus => {
    setIsCouponValid(couponStatus)
  }, [])

  return (
    <ContentWrapper wrapperClass='checkout' heading='Checkout'>
      <CheckoutCouponForm onApplyCoupon={handleCouponStatus} />
      <BillingDetails />
    </ContentWrapper>
  )
}

export default Checkout
