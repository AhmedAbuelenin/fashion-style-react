import React, {useCallback, useRef, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useLocation} from 'react-router-dom'
import {ContentWrapper, Page} from '../../components'
import {updateCartItems} from '../../redux/slices'
import '../../styles/_global.scss'
import {convertObjToArray} from '../../utils/convertObjToArray'
import './Cart.scss'
import {CartActions, CartTableList, CartTotals} from './index'

const Cart = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const _checkoutMessage = location.state?.checkoutMessage
  const {data} = useSelector(state => state.cart)
  const itemsObjRef = useRef({})

  const [isCartUpdateNeeded, setIsCartUpdateNeeded] = useState(false)

  const handleEnablingOfUpdateBtn = status => {
    setIsCartUpdateNeeded(status)
  }

  const handleQtyChange = useCallback(item => {
    itemsObjRef.current[item.code] = item
    handleEnablingOfUpdateBtn(true)
  }, [])

  const handleCartUpdate = useCallback(() => {
    const items = convertObjToArray(itemsObjRef.current)
    dispatch(updateCartItems(items))
    handleEnablingOfUpdateBtn(false)
  }, [])

  return (
    <Page title='Cart'>
      <ContentWrapper wrapperClass='cart' heading='Cart'>
        {data.length > 0 ? (
          <>
            <CartTableList {...{data}} onChangeCount={handleQtyChange} />
            <CartActions
              {...{isCartUpdateNeeded}}
              onUpdateCart={handleCartUpdate}
            />
            <CartTotals />
          </>
        ) : (
          <>
            {_checkoutMessage ? (
              <p className='cart__no-products'>{_checkoutMessage}</p>
            ) : null}
            <p data-testid='no-products' className='cart__no-products'>
              Your cart is currently empty.
            </p>
            <Link
              data-testid='return-to-shop'
              to='/shop'
              className='global-button cart__return-shop-button'>
              RETURN TO SHOP
            </Link>
          </>
        )}
      </ContentWrapper>
    </Page>
  )
}

export default Cart
