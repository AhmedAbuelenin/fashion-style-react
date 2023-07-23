import {Link} from 'react-router-dom'
import './CartModalSummary.css'

const CartModalSummary = ({subtotal}) => {
  return (
    <div data-testid='cart-modal-summary' className='cart-modal__summary'>
      <div className='cart-modal__subtotal-container'>
        <span className='cart-modal__subtotal'>Subtotal:</span>
        <span className='cart-modal__total-price'>${subtotal.toFixed(2)}</span>
      </div>
      <hr className='global-divider' />
      <Link
        to='/checkout'
        className='global-button cart-modal__checkout-link'>
        CHECKOUT
      </Link>
      <Link to='/cart' className='cart-modal__view-cart-link'>
        VIEW CART
      </Link>
    </div>
  )
}

export default CartModalSummary
