import {memo} from 'react'
import '../../../styles/_global.scss'
import './CartModal.css'
import {CartModalWrapper, CartModalItems, CartModalSummary} from './index'

const CartModal = props => {
  console.log('CartModal is rendering')

  const {data, subtotal, onRemoveItem} = props

  return (
    <CartModalWrapper>
      {data.length > 0 ? (
        <>
          <CartModalItems {...{data, onRemoveItem}} />
          <CartModalSummary {...{subtotal}} />
        </>
      ) : (
        <span className='cart-modal__no-products'>No products in the cart</span>
      )}
    </CartModalWrapper>
  )
}

export default memo(CartModal)
