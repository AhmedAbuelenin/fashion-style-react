import {memo, useCallback, useEffect} from 'react'
import {useForm} from 'react-hook-form'
import '../../styles/_global.scss'
import Loader from '../Loader/Loader'
import './CouponCodeForm.css'

const CouponForm = ({onApplyCoupon}) => {
  console.log('CouponCodeForm is rendering')

  const {
    register,
    handleSubmit,
    formState: {errors},
    setValue,
    setError,
    watch
  } = useForm({
    defaultValues: {
      coupon: '',
      isValid: false,
      loading: false
    }
  })

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
    onApplyCoupon(false)
  }

  const handleValidStatus = () => {
    setValue('isValid', true)
    onApplyCoupon(true)
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
      <form onSubmit={handleSubmit(onSubmit)} className='coupon-form'>
        <input
          {...register('coupon')}
          type='text'
          placeholder='Coupon code'
          className={`global-text-input coupon-form__input ${
            watch('isValid') && !watch('loading')
              ? 'coupon-form__input-check-bg'
              : ''
          }`}
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
        <span className='global-err-msg'>{errors.coupon.message}</span>
      ) : null}
    </div>
  )
}

export default memo(CouponForm)
