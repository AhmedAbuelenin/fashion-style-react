import {memo, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {setCartTotals} from '../../../redux/slices'
import '../../../styles/_global.scss'
import './CartModal.scss'
import {CartModalList, CartModalSummary, CartModalWrapper} from './index'

const CartModal = props => {
  console.log('CartModal is rendering')

  const dispatch = useDispatch()
  const {data} = useSelector(state => state.cart)

  useEffect(() => {
    const calcCartTotals = products => {
      let qtySum = 0
      let priceSum = 0

      products.forEach(product => {
        qtySum += product.quantity
        priceSum += product.quantity * product.price
      })

      return {qty: qtySum, price: priceSum}
    }

    const getCartTotals = () => {
      dispatch(setCartTotals(calcCartTotals(data)))
    }

    getCartTotals()
  }, [data])

  return (
    <CartModalWrapper>
      {data.length > 0 ? (
        <>
          <CartModalList {...{data}} />
          <CartModalSummary subtotal={props.subtotal} />
        </>
      ) : (
        <span className='cart-modal__no-products'>No products in the cart</span>
      )}
    </CartModalWrapper>
  )
}

export default memo(CartModal)
