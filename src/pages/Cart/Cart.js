import React, {useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {removeCartItem} from '../../redux/slices/Cart'
import '../../styles/_global.scss'
import './Cart.css'
import CartItemsTable from './CartItemsTable/CartItemsTable'

const Cart = () => {
  console.log('Cart is rendering')

  const dispatch = useDispatch()
  const {data} = useSelector(state => state.cart)
  const itemsRefObj = useRef({})

  const handleQtyChange = item => {
    itemsRefObj.current = {...itemsRefObj.current, [item.code]: item}
  }

  const handleItemRemove = itemId => {
    dispatch(removeCartItem(itemId))
  }

  return (
    <div className='content-wrapper cart'>
      <h1 className='global-h1'>Cart</h1>
      <CartItemsTable
        data={data}
        onChangeCount={handleQtyChange}
        onItemRemove={handleItemRemove}
      />
    </div>
  )
}

export default Cart
