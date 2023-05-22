import {memo} from 'react'
import '../../styles/_global.scss'
import './CouponCodeForm.css'

const CouponCodeForm = props => {
  console.log('CouponCodeForm is rendering')

  const {register, errors, onSubmit, isCouponValid} = props

  return (
    <div className='coupon-form-container'>
      <form onSubmit={onSubmit} className='coupon-form'>
        <input
          {...register('couponCode')}
          type='text'
          placeholder='Coupon code'
          className={`global-text-input ${
            isCouponValid ? 'coupon-form__input-bg' : ''
          }`}
        />
        <input
          type='submit'
          placeholder='APPLY COUPON'
          value='APPLY COUPON'
          className='global-button coupon-form__button'
        />
      </form>
      {errors.couponCode ? (
        <span className='global-err-msg'>{errors.couponCode.message}</span>
      ) : null}
    </div>
  )
}

function areEquals(prevProps, nextProps) {
  return (
    prevProps.register === nextProps.register &&
    prevProps.errors['couponCode'] === nextProps.errors['couponCode'] &&
    prevProps.onSubmit === nextProps.onSubmit &&
    prevProps.isCouponValid === nextProps.isCouponValid
  )
}

export default memo(CouponCodeForm, areEquals)
