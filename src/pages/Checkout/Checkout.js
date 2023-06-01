import {useCallback, useState} from 'react'
import {useForm} from 'react-hook-form'
import {ContentWrapper} from '../../components'
import './Checkout.scss'
import {
  AdditionalInfo,
  BillingDetails,
  CheckoutCouponForm,
  OrderTotals
} from './index'

const Checkout = () => {
  const {
    register,
    formState: {errors},
    handleSubmit,
    setValue,
    watch
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      companyName: '',
      countries: [],
      states: [],
      country: null,
      state: null,
      address: '',
      phone: '',
      email: '',
      orderNotes: ''
    }
  })

  const [isCouponValid, setIsCouponValid] = useState(false)

  const handleCouponStatus = useCallback(couponStatus => {
    setIsCouponValid(couponStatus)
  }, [])

  const submitOrder = data => {
    console.log('data', data)
  }

  return (
    <ContentWrapper wrapperClass='checkout' heading='Checkout'>
      <CheckoutCouponForm onApplyCoupon={handleCouponStatus} />
      <div className='checkout__main'>
        <BillingDetails {...{register, setValue, errors, watch}} />
        <OrderTotals onPlaceOrder={handleSubmit(submitOrder)} />
        <AdditionalInfo {...{register, errors}} />
      </div>
    </ContentWrapper>
  )
}

export default Checkout
