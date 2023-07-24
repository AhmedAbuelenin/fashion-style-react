import {RiCloseCircleFill as DeleteIcon} from 'react-icons/ri'
import {useDispatch} from 'react-redux'
import {removeCartItem} from '../../../../redux/slices'
import './CartModalItem.scss'

const CartModalItem = ({item}) => {
  const {code, name, quantity, price, image} = item

  const dispatch = useDispatch()

  const handleItemRemove = () => {
    dispatch(removeCartItem(code))
  }

  return (
    <>
      <div className='cart-modal__img-container'>
        <img
          data-testid='item-img'
          src={image}
          alt='cart item img'
          className='cart-modal__img'
        />
        <DeleteIcon
          data-testid='item-delete-icon'
          color='#000000'
          size={20}
          className='cart-modal__delete-icon'
          onClick={handleItemRemove}
        />
      </div>
      <div className='cart-modal__title-price-container'>
        <span data-testid='item-name' className='cart-modal__item-title'>
          {name}
        </span>
        <span data-testid='item-total-price' className='cart-modal__item-price'>
          {`${quantity} x $${price}`}
        </span>
      </div>
    </>
  )
}

export default CartModalItem
