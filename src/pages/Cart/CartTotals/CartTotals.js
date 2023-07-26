import {memo} from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {cartSubtitles} from '../../../data'
import '../../../styles/_global.scss'
import {CartTotalsItem} from '../index'
import './CartTotals.scss'

const CartTotals = () => {
  const {coupon, totals} = useSelector(state => state.cart)

  const totalPrice = totals.price
  const discount = coupon.status ? totalPrice * 0.05 : 0

  const _data = cartSubtitles.map(item => {
    if (item.name !== 'discount') return item
    if (discount) return item
    return null
  })

  const getValue = key => {
    switch (key) {
      case 'subtotal':
        return totalPrice
      case 'discount':
        return discount
      case 'total':
        return totalPrice - discount
      default:
        return 'Key is not defined'
    }
  }

  return (
    <div data-testid='cart-totals' className='cart-totals'>
      <span data-testid='cart-totals-heading' className='cart-totals__heading'>
        Cart totals
      </span>
      <ol className='cart-totals__content'>
        {_data.map(item => {
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
      </ol>
      <Link
        data-testid='proceed-to-checkout-link'
        to='/checkout'
        className='global-button cart-totals__checkout-button'>
        PROCEED TO CHECKOUT
      </Link>
    </div>
  )
}

export default memo(CartTotals)
