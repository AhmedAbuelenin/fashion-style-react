import {useMemo} from 'react'
import {CouponCodeForm, Loader} from '../../../components'
import './CartActions.css'

const CartActions = props => {
  const {register, errors, watch, onSubmit, onUpdateCart} = props

  const memoObj = useMemo(() => {
    return {register, errors, onSubmit}
  }, [register, errors['couponCode']])

  return (
    <div className='cart__actions-container'>
      <div className='cart__form-loader-container'>
        <CouponCodeForm
          {...{
            register: memoObj.register,
            errors: memoObj.errors,
            onSubmit: memoObj.onSubmit,
            isCouponValid: watch('isCouponValid')
          }}
        />
        {watch('loading') ? (
          <div className='cart__loader'>
            <Loader />
          </div>
        ) : null}
      </div>
      <button
        className='global-button cart__button'
        onClick={onUpdateCart}
        disabled={!watch('isCartUpdateNeeded')}>
        UPDATE CART
      </button>
    </div>
  )
}

export default CartActions
