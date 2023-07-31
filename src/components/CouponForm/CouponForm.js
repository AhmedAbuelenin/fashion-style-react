import {memo, useCallback, useEffect} from 'react'
import {useForm} from 'react-hook-form'
import {useDispatch, useSelector} from 'react-redux'
import {setCoupon} from '../../redux/slices'
import '../../styles/_global.scss'
import Loader from '../Loader/Loader'
import './CouponForm.scss'

const CouponForm = ({formClass = ''}) => {
  const dispatch = useDispatch()
  const lastSubmittedCouponValue = useSelector(state => state.cart.coupon.value)
  const {
    register,
    handleSubmit,
    formState: {errors},
    setValue,
    setError,
    watch
  } = useForm({
    defaultValues: {
      coupon: lastSubmittedCouponValue,
      loading: false
    }
  })

  const checkClass =
    lastSubmittedCouponValue && !watch('loading')
      ? 'coupon-form__input-check-bg'
      : ''

  useEffect(() => {
    const subscription = watch(({coupon}) => {
      if (coupon.length === 0) {
        handleInvalidStatus()
      }
    })

    return () => subscription.unsubscribe()
  }, [watch])

  const updateCoupon = _coupon => {
    dispatch(setCoupon(_coupon))
  }

  const handleInvalidStatus = () => {
    updateCoupon({status: false, value: ''})
  }

  const handleValidStatus = () => {
    updateCoupon({status: true, value: watch('coupon')})
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
    <div data-testid='coupon-form' className='coupon-form-container'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`coupon-form ${formClass}`}>
        <div className='coupon-form__input-container'>
          <input
            aria-label='coupon code'
            {...register('coupon')}
            name='coupon'
            placeholder='Coupon code'
            className={`coupon-form__input ${checkClass}`}
          />
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
        <input
          aria-label='apply coupon'
          type='submit'
          value='APPLY COUPON'
          className='global-button coupon-form__button'
        />
      </form>
    </div>
  )
}

export default memo(CouponForm)
