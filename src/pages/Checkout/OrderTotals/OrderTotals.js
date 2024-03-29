import {useSelector} from 'react-redux'
import {Loader, SectionWrapper} from '../../../components'
import '../../../styles/_global.scss'
import {OrderDetails} from '../index'
import './OrderTotals.scss'

const OrderTotals = ({isSending, onPlaceOrder}) => {
  const {
    data,
    coupon,
    totals: {price: subtotal}
  } = useSelector(state => state.cart)

  const discount = coupon.status ? subtotal * 0.05 : 0

  return (
    <SectionWrapper heading='Your order' sectionClass='order-totals-wrapper'>
      <div className='order-totals'>
        <OrderDetails {...{data, discount, subtotal}} />
        <button
          data-testid='place-order-button'
          type='submit'
          onClick={onPlaceOrder}
          disabled={isSending}
          className='global-button order-totals__button'>
          {isSending ? (
            <div className='centered-container'>
              <Loader />
            </div>
          ) : (
            'PLACE ORDER'
          )}
        </button>
      </div>
    </SectionWrapper>
  )
}

export default OrderTotals
