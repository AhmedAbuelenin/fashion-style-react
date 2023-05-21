import {memo} from 'react'
import {Link} from 'react-router-dom'
import {cartSubtitles} from '../../../data'
import '../../../styles/_global.scss'
import {CartTotalsItem} from '../index'
import './CartTotals.css'

const CartTotals = ({subtotal, hasValidCoupon}) => {
  console.log('CartTotals is rendering')

  const discount = hasValidCoupon ? subtotal * 0.05 : 0

  const data = cartSubtitles.map(item => {
    if (item.name !== 'discount') return item
    if (discount) return item
    return null
  })

  const getValue = key => {
    switch (key) {
      case 'subtotal':
        return subtotal
      case 'discount':
        return discount
      case 'total':
        return subtotal - discount
      default:
        return 'Key is not defined'
    }
  }

  return (
    <div className='cart-totals'>
      <span className='cart-totals__heading'>Cart totals</span>
      <div className='cart-totals__content'>
        {data.map(item => {
          if (item) {
            const {id, name} = item
            return (
              <CartTotalsItem
                classValue={name === 'total' ? 'cart-totals__total-price' : ''}
                key={id}
                subtitle={name.toUpperCase()}
                value={getValue(name)}
                hasDiscount={name === 'discount'}
                hasDivider={name !== 'total'}
              />
            )
          }
          return null
        })}
      </div>
      <Link
        to='/checkout'
        className='global-button cart-totals__checkout-button'>
        PROCEED TO CHECKOUT
      </Link>
    </div>
  )
}

export default memo(CartTotals)
