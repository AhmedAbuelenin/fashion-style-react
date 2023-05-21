import React, {useEffect, useRef} from 'react'
import {useForm} from 'react-hook-form'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {ContentWrapper, CouponCodeForm} from '../../components'
import {removeCartItem, updateCartItems} from '../../redux/slices'
import '../../styles/_global.scss'
import './Cart.css'
import {CartItemsTable, CartTotals} from './index'
import {convertObjToArray} from '../../utils/convertObjToArray'

const Cart = () => {
  console.log('Cart is rendering')

  const dispatch = useDispatch()
  const {data} = useSelector(state => state.cart)
  const itemsObjRef = useRef({})
  const {
    register,
    handleSubmit,
    formState: {errors},
    setValue,
    setError,
    watch
  } = useForm({
    defaultValues: {
      isCouponValid: false,
      subtotal: 0,
      isCartUpdateNeeded: false
    }
  })

  useEffect(() => {
    const calcCartSubtotal = () => {
      let sum = 0

      data.forEach(item => {
        sum += item.quantity * item.price.value
      })

      setValue('subtotal', sum)
    }

    calcCartSubtotal()
  }, [data])

  const handleCartUpdateStatus = status => {
    setValue('isCartUpdateNeeded', status)
  }

  const handleQtyChange = item => {
    itemsObjRef.current[item.code] = item
    handleCartUpdateStatus(true)
  }

  const handleItemRemove = itemId => {
    dispatch(removeCartItem(itemId))
  }

  const showCouponCodeValidationErr = msg => {
    setError('couponCode', {type: 'validation', message: msg})
  }

  const handleCouponSubmit = async data => {
    //Call api endpoint instead to validate coupon code here
    if (!data.couponCode) {
      showCouponCodeValidationErr('Field is required')
      return
    }
    if (data.couponCode === 'testCoupon') {
      setValue('isCouponValid', true)
      return
    }

    showCouponCodeValidationErr('Invalid coupon code')
    setValue('isCouponValid', false)
  }

  const handleCartUpdate = () => {
    const items = convertObjToArray(itemsObjRef.current)
    dispatch(updateCartItems(items))
    handleCartUpdateStatus(false)
  }

  if (data.length > 0)
    return (
      <ContentWrapper wrapperClass='cart' heading='Cart'>
        <CartItemsTable
          data={data}
          onChangeCount={handleQtyChange}
          onItemRemove={handleItemRemove}
        />
        <div className='cart__coupon-update-cart-container'>
          <CouponCodeForm
            register={register}
            {...{errors}}
            onSubmit={handleSubmit(handleCouponSubmit)}
          />
          <button
            className='global-button cart__button'
            onClick={handleCartUpdate}
            disabled={!watch('isCartUpdateNeeded')}>
            UPDATE CART
          </button>
        </div>
        <CartTotals
          hasValidCoupon={watch('isCouponValid')}
          subtotal={watch('subtotal')}
        />
      </ContentWrapper>
    )

  return (
    <ContentWrapper wrapperClass='cart' heading='Cart'>
      <span className='cart__no-products'>Your cart is currently empty.</span>
      <Link to='/shop' className='global-button cart__return-shop-button'>
        RETURN TO SHOP
      </Link>
    </ContentWrapper>
  )
}

export default Cart
