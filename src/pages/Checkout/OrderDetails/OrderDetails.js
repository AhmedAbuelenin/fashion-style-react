import './OrderDetails.scss'

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
            <td>{`${item.name}  x ${item.quantity}`}</td>
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
            <td>-${discount}</td>
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
