import {yupResolver} from '@hookform/resolvers/yup'
import {useCallback, useEffect} from 'react'
import {Controller, useForm} from 'react-hook-form'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {ContentWrapper, SubmitSuccessMsg} from '../../components'
import {
  emptyCart,
  resetBillingDetails,
  setBillingDetails,
  setCoupon
} from '../../redux/slices'
import BillingFormValidation from './BillingFormValidation'
import './Checkout.scss'
import {
  AdditionalInfo,
  BillingDetails,
  CheckoutCouponForm,
  OrderTotals
} from './index'

const Checkout = () => {
  const dispatch = useDispatch()
  const billingDetails = useSelector(state => state.billingDetails)
  console.log(
    '🚀 ~ file: Checkout.js:25 ~ Checkout ~ billingDetails:',
    billingDetails
  )
  const {coupon} = useSelector(state => state.cart)
  const {
    register,
    formState: {errors, isDirty},
    handleSubmit,
    setValue,
    watch,
    clearErrors,
    control
  } = useForm({
    defaultValues: {
      firstName: billingDetails.firstName,
      lastName: billingDetails.lastName,
      companyName: billingDetails.companyName,
      country: billingDetails.country,
      state: billingDetails.state,
      address: billingDetails.address,
      phone: billingDetails.phone,
      email: billingDetails.email,
      orderNotes: billingDetails.orderNotes,
      sending: false,
      isSuccessMsgShown: false
    },
    resolver: yupResolver(BillingFormValidation)
  })

  useEffect(() => {
    return () => {
      const currentData = watch()
      if (!currentData.isSuccessMsgShown) {
        dispatch(setBillingDetails(currentData))
      }
    }
  }, [])

  const handleCoupon = useCallback(_coupon => {
    dispatch(setCoupon(_coupon))
  }, [])

  const submitOrder = data => {
    //You may send this data to backend in next phase
    setValue('sending', true)
    setTimeout(() => {
      dispatch(emptyCart())
      dispatch(resetBillingDetails())
      setValue('isSuccessMsgShown', true)
    }, 2000)
  }

  return (
    <ContentWrapper wrapperClass='checkout' heading='Checkout'>
      {!watch('isSuccessMsgShown') ? (
        <>
          <CheckoutCouponForm {...{coupon}} onApplyCoupon={handleCoupon} />
          <div className='checkout__main'>
            <div>
              <BillingDetails
                {...{
                  register,
                  Controller,
                  control,
                  setValue,
                  errors,
                  isDirty,
                  watch,
                  clearErrors
                }}
              />
              <AdditionalInfo {...{register, errors}} />
            </div>
            <OrderTotals
              {...{coupon}}
              isSending={watch('sending')}
              onPlaceOrder={handleSubmit(submitOrder)}
            />
          </div>
        </>
      ) : (
        <>
          <SubmitSuccessMsg className='checkout__submit-success-msg'>
            We have received your order successfully, one of our customer
            service agents will contact you in a couple of days to confirm your
            order and discuss the shipping details and the expected time to
            receive it. We have sent all your order details to your email (
            <strong>{watch('email')}</strong>). Thanks for shopping with Fashion
            Style.
          </SubmitSuccessMsg>
          <Link to='/shop' className='global-button'>
            RETURN TO SHOP
          </Link>
        </>
      )}
    </ContentWrapper>
  )
}

export default Checkout
