import {memo} from 'react'
import {CouponForm} from '../../../components'
import './CartActions.scss'

const CartActions = props => {
  const {isCartUpdateNeeded, onUpdateCart} = props

  return (
    <div className='cart__actions-container'>
      <CouponForm />
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
