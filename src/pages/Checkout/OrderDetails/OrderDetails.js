import './OrderDetails.scss'
import {GrFormClose as CloseIcon} from 'react-icons/gr'

const OrderDetails = props => {
  const {data, discount, subtotal} = props

  return (
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.code}>
            <td className='order-totals__name-quantity-container'>
              {item.name}
              <CloseIcon
                color='black'
                size='21'
                className='order-totals__multiply-icon'
              />
              <span className='order-totals__quantity'>{item.quantity}</span>
            </td>
            <td>${item.price}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Subtotal</td>
          <td className='order-totals__subtotal-value'>
            ${subtotal.toFixed(2)}
          </td>
        </tr>
        {discount > 0 ? (
          <tr>
            <td>Discount</td>
            <td className='order-totals__discount-value'>
              - ${discount.toFixed(2)}
            </td>
          </tr>
        ) : null}
        <tr>
          <td>Total</td>
          <td className='order-totals__total-value'>
            ${(subtotal - discount).toFixed(2)}
          </td>
        </tr>
      </tfoot>
    </table>
  )
}

export default OrderDetails
