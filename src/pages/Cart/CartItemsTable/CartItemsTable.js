import {memo} from 'react'
import {cartItemDetails} from '../../../data'
import '../../../styles/_global.scss'
import {CartItem} from '../index'
import './CartItemsTable.css'

const CartItemsTable = props => {
  console.log('CartItemsTable is rendering')

  const {data, onItemRemove, onChangeCount} = props

  return (
    <table>
      <thead>
        <tr>
          <th className='global-divider cart__th-delete-icon'></th>
          <th className='global-divider cart__th-img'></th>
          {cartItemDetails.map(item => (
            <th
              key={item.id}
              className={`global-divider cart__th-${item.name}`}>
              {item.name.toUpperCase()}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.code}>
            <CartItem {...{item, onItemRemove, onChangeCount}} />
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function areEquals(prevProps, nextProps) {
  return prevProps.data === nextProps.data
}

export default memo(CartItemsTable, areEquals)
