import React, {useCallback, useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {ContentWrapper} from '../../components'
import {setCoupon, updateCartItems} from '../../redux/slices'
import '../../styles/_global.scss'
import {convertObjToArray} from '../../utils/convertObjToArray'
import './Cart.css'
import {CartActions, CartTableList, CartTotals} from './index'

const Cart = () => {
  console.log('Cart is rendering')

  const dispatch = useDispatch()
  const {data} = useSelector(state => state.cart)
  const itemsObjRef = useRef({})

  const [isCartUpdateNeeded, setIsCartUpdateNeeded] = useState(false)

  const handleEnableStatusOfCartUpdateBtn = status => {
    setIsCartUpdateNeeded(status)
  }

  const handleQtyChange = useCallback(item => {
    itemsObjRef.current[item.code] = item
    handleEnableStatusOfCartUpdateBtn(true)
  }, [])

  const handleCartUpdate = useCallback(() => {
    const items = convertObjToArray(itemsObjRef.current)
    dispatch(updateCartItems(items))
    handleEnableStatusOfCartUpdateBtn(false)
  }, [])

  const handleCoupon = useCallback(_coupon => {
    dispatch(setCoupon(_coupon))
  }, [])

  return (
    <ContentWrapper wrapperClass='cart' heading='Cart'>
      {data.length > 0 ? (
        <>
          <CartTableList {...{data}} onChangeCount={handleQtyChange} />
          <CartActions
            {...{isCartUpdateNeeded}}
            onApplyCoupon={handleCoupon}
            onUpdateCart={handleCartUpdate}
          />
          <CartTotals {...{data}} />
        </>
      ) : (
        <>
          <span className='cart__no-products'>
            Your cart is currently empty.
          </span>
          <Link to='/shop' className='global-button cart__return-shop-button'>
            RETURN TO SHOP
          </Link>
        </>
      )}
    </ContentWrapper>
  )
}

export default Cart
