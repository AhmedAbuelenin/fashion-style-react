import {memo} from 'react'
import {VscChromeClose as CloseIcon} from 'react-icons/vsc'
import {Counter} from '../../../components'
import './CartItem.css'

const CartItem = props => {
  console.log('CartItem is rendering')

  const {item, onItemRemove, onChangeCount} = props
  const {code, name, price, quantity, images} = item

  const onCountChange = newQty => {
    onChangeCount({code, quantity: newQty})
  }

  const onRemoveItem = () => {
    onItemRemove(code)
  }

  return (
    <>
      <td className='cart__td-delete-icon'>
        <CloseIcon
          className='cart__delete-icon'
          size={18}
          onClick={onRemoveItem}
        />
      </td>
      <td className='cart__td-img'>
        <img
          src={images[0].baseUrl}
          alt='item img'
          className='cart__item-img'
        />
      </td>
      <td className='cart__td-name'>{name}</td>
      <td className='cart__td-price'>${price.value}</td>
      <td className='cart__td-quantity'>
        <Counter
          containerClass='cart__counter'
          countClass='cart__count'
          operatorClass='cart__operator'
          count={quantity.toString()}
          onChangeCount={onCountChange}
        />
      </td>
      <td className='cart__td-subtotal'>${price.value * quantity}</td>
    </>
  )
}

function areEquals(prevProps, nextProps) {
  return prevProps.item.quantity === nextProps.item.quantity
}

export default memo(CartItem, areEquals)
