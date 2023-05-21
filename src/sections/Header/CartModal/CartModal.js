import './CartModal.css'
import '../../../styles/_global.scss'
import {RiCloseCircleFill as DeleteIcon} from 'react-icons/ri'
import {Link} from 'react-router-dom'

const CartModal = ({data, subtotal, onRemoveItem}) => {
  return (
    <div className='cart-modal'>
      <div className='cart-modal__header-list-container'>
        <div className='cart-modal__header-divider-container'>
          <span className='cart-modal__header'>Your Cart</span>
          <hr className='global-divider' />
        </div>
        {data.length > 0 ? (
          <>
            <ul className='cart-modal__list'>
              {data.map(item => {
                const {code, name, quantity, price, images} = item
                return (
                  <li key={code} className='cart-modal__item global-divider'>
                    <div className='cart-modal__img-container'>
                      <img
                        src={images[0].baseUrl}
                        alt='cart item img'
                        className='cart-modal__img'
                      />
                      <DeleteIcon
                        color='#000000'
                        size={20}
                        className='cart-modal__delete-icon'
                        onClick={() => onRemoveItem(code)}
                      />
                    </div>
                    <div className='cart-modal__title-price-container'>
                      <span className='cart-modal__item-title'>{name}</span>
                      <span className='cart-modal__item-price'>
                        {`${quantity} x $${price.value}`}
                      </span>
                    </div>
                  </li>
                )
              })}
            </ul>
            <div className='cart-modal__summary'>
              <div className='cart-modal__subtotal-container'>
                <span className='cart-modal__subtotal'>Subtotal:</span>
                <span className='cart-modal__total-price'>
                  ${subtotal.toFixed(2)}
                </span>
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
          </>
        ) : (
          <span className='cart-modal__no-products'>
            No products in the cart
          </span>
        )}
      </div>
    </div>
  )
}

export default CartModal
