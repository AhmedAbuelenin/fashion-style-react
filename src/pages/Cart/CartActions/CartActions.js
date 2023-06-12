import {memo} from 'react'
import {CouponForm} from '../../../components'
import './CartActions.scss'

const CartActions = props => {
  console.log('CartActions is rendering')

  const {isCartUpdateNeeded, onUpdateCart, onApplyCoupon} = props

  return (
    <div className='cart__actions-container'>
      <CouponForm {...{onApplyCoupon}} />
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
