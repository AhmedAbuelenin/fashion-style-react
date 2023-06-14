import {memo} from 'react'
import '../../../styles/_global.scss'
import './CartModal.scss'
import {CartModalList, CartModalSummary, CartModalWrapper} from './index'

const CartModal = ({data, subtotal}) => {
  return (
    <CartModalWrapper>
      {data.length > 0 ? (
        <>
          <CartModalList {...{data}} />
          <CartModalSummary subtotal={subtotal} />
        </>
      ) : (
        <span className='cart-modal__no-products'>No products in the cart</span>
      )}
    </CartModalWrapper>
  )
}

export default memo(CartModal)
