import './CartTotalsItem.css'
import '../../../styles/_global.scss'

const CartTotalsItem = props => {
  const {classValue, subtitle, value, hasDiscount, hasDivider} = props

  const _value = hasDiscount ? `- $${value.toFixed(2)}` : `$${value.toFixed(2)}`

  return (
    <>
      <div className='cart-totals__subtitle-price-container '>
        <span className='cart-totals__subtitle'>{subtitle}</span>
        <span className={`${classValue}`}>{_value}</span>
      </div>
      {hasDivider ? (
        <hr className='global-divider cart-totals__divider' />
      ) : null}
    </>
  )
}

export default CartTotalsItem
