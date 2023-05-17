import {Link} from 'react-router-dom'
import {cartItemDetails} from '../../../data'
import '../../../styles/_global.scss'
import CartItem from '../CartItem/CartItem'
import './CartItemsTable.css'

const CartItemsTable = props => {
  console.log('CartItemsTable is rendering')

  const {data, onItemRemove, onChangeCount} = props

  if (data.length > 0)
    return (
      <table>
        <thead>
          <tr>
            <th className='cart__th-delete-icon'></th>
            <th className='cart__th-img'></th>
            {cartItemDetails.map(item => (
              <th key={item.id} className={`cart__th-${item.name}`}>
                {item.name.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(item => {
            return (
              <tr key={item.code}>
                <CartItem {...{item, onItemRemove, onChangeCount}} />
              </tr>
            )
          })}
        </tbody>
      </table>
    )

  return (
    <>
      <span className='cart__no-products'>Your cart is currently empty.</span>
      <Link to='/shop' className='global-button cart__return-shop-button'>
        RETURN TO SHOP
      </Link>
    </>
  )
}

export default CartItemsTable
