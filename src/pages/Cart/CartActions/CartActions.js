import {memo} from 'react'
import {CouponCodeForm} from '../../../components'
import './CartActions.css'

const CartActions = props => {
  console.log('CartActions is rendering')

  const {isCartUpdateNeeded, onUpdateCart, onApplyCoupon} = props

  return (
    <div className='cart__actions-container'>
      <CouponCodeForm {...{onApplyCoupon}} />
      <div className='cart__form-loader-container'></div>
      <button
        className='global-button cart__button'
        onClick={onUpdateCart}
        disabled={!isCartUpdateNeeded}>
        UPDATE CART
      </button>
    </div>
  )
}

export default memo(CartActions)
