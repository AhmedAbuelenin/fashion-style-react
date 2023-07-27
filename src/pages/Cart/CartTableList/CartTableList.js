import {memo} from 'react'
import {cartItemDetails} from '../../../data'
import '../../../styles/_global.scss'
import {CartTableItem} from '../index'
import './CartTableList.scss'

const CartTableList = props => {
  const {data, onChangeCount} = props

  return (
    <table data-testid='cart-items-table'>
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
          <CartTableItem key={item.code} {...{item, onChangeCount}} />
        ))}
      </tbody>
    </table>
  )
}

function areEquals(prevProps, nextProps) {
  return prevProps.data === nextProps.data
}

export default memo(CartTableList, areEquals)
