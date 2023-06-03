import {useCallback} from 'react'
import {useForm} from 'react-hook-form'
import {ContentWrapper} from '../../components'
import './Checkout.scss'
import {
  AdditionalInfo,
  BillingDetails,
  CheckoutCouponForm,
  OrderTotals
} from './index'
import {useDispatch, useSelector} from 'react-redux'
import {setCoupon} from '../../redux/slices'

const Checkout = () => {
  const dispatch = useDispatch()
  const {coupon} = useSelector(state => state.cart)

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

  const handleCoupon = useCallback(_coupon => {
    dispatch(setCoupon(_coupon))
  }, [])

  const submitOrder = data => {
    console.log('data', data)
  }

  return (
    <ContentWrapper wrapperClass='checkout' heading='Checkout'>
      <CheckoutCouponForm {...{coupon}} onApplyCoupon={handleCoupon} />
      <div className='checkout__main'>
        <div>
          <BillingDetails {...{register, setValue, errors, watch}} />
          <AdditionalInfo {...{register, errors}} />
        </div>
        <OrderTotals {...{coupon}} onPlaceOrder={handleSubmit(submitOrder)} />
      </div>
    </ContentWrapper>
  )
}

export default Checkout
