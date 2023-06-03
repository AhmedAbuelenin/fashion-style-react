import {useSelector} from 'react-redux'
import {SectionWrapper} from '../../../components'
import {OrderDetails} from '../index'
import './OrderTotals.scss'

const OrderTotals = ({coupon, onPlaceOrder}) => {
  const {
    data,
    totals: {price: subtotal}
  } = useSelector(state => state.cart)

  const discount = coupon.status ? subtotal * 0.05 : 0

  return (
    <SectionWrapper heading='Your order' className='order-totals-wrapper'>
      <div className='order-totals'>
        <OrderDetails {...{data, discount, subtotal}} />
        <button
          type='submit'
          onClick={onPlaceOrder}
          className='global-button order-totals__button'>
          PLACE ORDER
        </button>
      </div>
    </SectionWrapper>
  )
}

export default OrderTotals
