import {useCallback, useState} from 'react'
import {ContentWrapper} from '../../components'
import './Checkout.scss'
import {
  CheckoutCouponForm,
  BillingDetails,
  OrderTotals,
  AdditionalInfo
} from './index'

const Checkout = () => {
  const [isCouponValid, setIsCouponValid] = useState(false)

  const handleCouponStatus = useCallback(couponStatus => {
    setIsCouponValid(couponStatus)
  }, [])

  return (
    <ContentWrapper wrapperClass='checkout' heading='Checkout'>
      <CheckoutCouponForm onApplyCoupon={handleCouponStatus} />
      <div className='checkout__main'>
        <BillingDetails />
        <OrderTotals />
        <AdditionalInfo />
      </div>
    </ContentWrapper>
  )
}

export default Checkout
