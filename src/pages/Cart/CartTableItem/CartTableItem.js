import {memo, useCallback} from 'react'
import {VscChromeClose as CloseIcon} from 'react-icons/vsc'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {Counter} from '../../../components'
import {removeCartItem} from '../../../redux/slices'
import {generateItemIDFromCode} from '../../../utils'
import './CartTableItem.css'

const CartTableItem = props => {
  console.log('CartTableItem is rendering')

  const {item, onChangeCount} = props
  const {code, name, price, quantity, image} = item

  const itemId = generateItemIDFromCode(item.code)

  const dispatch = useDispatch()

  const onCountChange = useCallback(newQty => {
    onChangeCount({code, quantity: newQty})
  }, [])

  const removeItemFromCart = () => {
    dispatch(removeCartItem(itemId))
  }

  return (
    <>
      <td className='cart__td-delete-icon'>
        <CloseIcon
          className='cart__delete-icon'
          size={18}
          onClick={removeItemFromCart}
        />
      </td>
      <td className='cart__td-img'>
        <Link to={`/productDetailsPage/${itemId}`}>
          <img src={image} alt='item img' className='cart__item-img' />
        </Link>
      </td>
      <td className='cart__td-name'>
        <Link to={`/productDetailsPage/${itemId}`}>{name}</Link>
      </td>
      <td className='cart__td-price'>${price}</td>
      <td className='cart__td-quantity'>
        <Counter
          containerClass='cart__counter'
          countClass='cart__count'
          operatorClass='cart__operator'
          count={quantity.toString()}
          onChangeCount={onCountChange}
        />
      </td>
      <td className='cart__td-subtotal'>${(price * quantity).toFixed(2)}</td>
    </>
  )
}

function areEquals(prevProps, nextProps) {
  return prevProps.item.quantity === nextProps.item.quantity
}

export default memo(CartTableItem, areEquals)
