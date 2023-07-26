import './CartTotalsItem.css'
import '../../../styles/_global.scss'

const CartTotalsItem = props => {
  const {classValue, subtitle, value, hasDiscount} = props

  const _value = `${hasDiscount ? '- ' : ''}$${value.toFixed(2)}`

  return (
    <li
      data-testid='cart-totals-item'
      className={`cart-totals__subtitle-price-container global-divider`}>
      <span data-testid='subtitle' className='cart-totals__subtitle'>
        {subtitle}
      </span>
      <span data-testid='value' className={`${classValue}`}>
        {_value}
      </span>
    </li>
  )
}

export default CartTotalsItem
