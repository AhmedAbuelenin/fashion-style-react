import {memo, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {cartSubtitles} from '../../../data'
import '../../../styles/_global.scss'
import {calcCartTotals} from '../../../utils'
import {CartTotalsItem} from '../index'
import './CartTotals.css'

const CartTotals = ({data, isCouponValid}) => {
  console.log('CartTotals is rendering')

  const [subtotal, setSubtotal] = useState(0)

  const discount = isCouponValid ? subtotal * 0.05 : 0

  useEffect(() => {
    const getCartTotals = () => {
      setSubtotal(calcCartTotals(data).price)
    }

    getCartTotals()
  }, [data])

  const _data = cartSubtitles.map(item => {
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
