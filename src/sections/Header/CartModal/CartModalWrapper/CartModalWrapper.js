import './CartModalWrapper.css'

const CartModalWrapper = ({children}) => {
  return (
    <div className='cart-modal'>
      <span className='global-divider cart-modal__header'>Your Cart</span>
      {children}
    </div>
  )
}

export default CartModalWrapper
