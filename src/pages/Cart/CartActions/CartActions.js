import {memo} from 'react'
import {CouponForm} from '../../../components'
import './CartActions.scss'

const CartActions = props => {
  const {isCartUpdateNeeded, onUpdateCart} = props

  return (
    <div data-testid='cart-actions' className='cart__actions-container'>
      <CouponForm />
      <button
        data-testid='update-cart-button'
        className='global-button cart__button'
        onClick={onUpdateCart}
        disabled={!isCartUpdateNeeded}>
        UPDATE CART
      </button>
    </div>
  )
}

export default memo(CartActions)
