import {RiCloseCircleFill as DeleteIcon} from 'react-icons/ri'
import './CartModalItems.css'

const CartModalItems = ({data, onRemoveItem}) => {
  return (
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
  )
}

export default CartModalItems
