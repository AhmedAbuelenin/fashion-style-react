import {memo, useCallback, useEffect} from 'react'
import {useForm} from 'react-hook-form'
import '../../styles/_global.scss'
import Loader from '../Loader/Loader'
import './CouponForm.scss'
import {useSelector} from 'react-redux'

const CouponForm = props => {
  console.log('CouponForm is rendering')

  const {formClass, onApplyCoupon} = props

  const {coupon} = useSelector(state => state.cart)

  const {
    register,
    handleSubmit,
    formState: {errors},
    setValue,
    setError,
    watch
  } = useForm({
    defaultValues: {
      coupon: coupon?.value,
      isValid: coupon?.status,
      loading: false
    }
  })

  const checkClass =
    watch('isValid') && !watch('loading') ? 'coupon-form__input-check-bg' : ''

  useEffect(() => {
    const subscription = watch(({coupon, isValid}) => {
      if (coupon.length === 0 && isValid) {
        handleInvalidStatus()
      }
    })

    return () => subscription.unsubscribe()
  }, [watch])

  const handleInvalidStatus = () => {
    setValue('isValid', false)
    onApplyCoupon({status: false, value: watch('coupon')})
  }

  const handleValidStatus = () => {
    setValue('isValid', true)
    onApplyCoupon({status: true, value: watch('coupon')})
  }

  const showValidationErr = msg => {
    setError('coupon', {type: 'validation', message: msg})
  }

  const handleLoading = status => {
    setValue('loading', status)
  }

  const onSubmit = useCallback(data => {
    //Call api endpoint instead to validate coupon code here
    if (!data.coupon) {
      showValidationErr('Field is required')
      return
    }

    handleLoading(true)
    setTimeout(() => {
      if (data.coupon === 'testCoupon') {
        handleValidStatus()
        return
      }

      showValidationErr('Invalid coupon code')
      handleInvalidStatus()
    }, 1000)
    setTimeout(() => {
      handleLoading(false)
    }, 1050)
  }, [])

  return (
    <div className='coupon-form-container'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`coupon-form ${formClass}`}>
        <input
          {...register('coupon')}
          name='coupon'
          placeholder='Coupon code'
          className={`coupon-form__input ${checkClass}`}
        />
        <input
          type='submit'
          value='APPLY COUPON'
          className='global-button coupon-form__button'
        />
      </form>
      {watch('loading') ? (
        <div className='coupon-form__loader-container'>
          <Loader className='coupon-form__loader' />
        </div>
      ) : errors.coupon ? (
        <span className='coupon-form__validation-err'>
          {errors.coupon.message}
        </span>
      ) : null}
    </div>
  )
}

export default memo(CouponForm)
