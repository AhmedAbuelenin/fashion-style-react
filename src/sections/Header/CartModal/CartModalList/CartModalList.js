import './CartModalList.scss'
import {CartModalItem} from '../index'

const CartModalList = ({data}) => {
  return (
    <ul data-testid='cart-modal-list' className='cart-modal__list'>
      {data.map(item => {
        return (
          <li key={item.code} className='cart-modal__item global-divider'>
            <CartModalItem {...{item}} />
          </li>
        )
      })}
    </ul>
  )
}

export default CartModalList
