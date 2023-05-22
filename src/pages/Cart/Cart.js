import React, {useCallback, useEffect, useRef} from 'react'
import {useForm} from 'react-hook-form'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {ContentWrapper} from '../../components'
import {removeCartItem, updateCartItems} from '../../redux/slices'
import '../../styles/_global.scss'
import {convertObjToArray} from '../../utils/convertObjToArray'
import './Cart.css'
import {CartActions, CartItemsTable, CartTotals} from './index'

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
      loading: false,
      couponCode: '',
      isCouponValid: false,
      subtotal: 0,
      isCartUpdateNeeded: false
    }
  })

  useEffect(() => {
    const subscription = watch(({couponCode, isCouponValid}, {name, type}) => {
      if (couponCode.length === 0 && isCouponValid) {
        setValue('isCouponValid', false)
      }
    })

    return () => subscription.unsubscribe()
  }, [watch])

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

  const handleCouponSubmit = useCallback(data => {
    //Call api endpoint instead to validate coupon code here
    if (!data.couponCode) {
      showCouponCodeValidationErr('Field is required')
      return
    }

    setValue('loading', true)
    setTimeout(() => {
      if (data.couponCode === 'testCoupon') {
        setValue('isCouponValid', true)
        return
      }

      showCouponCodeValidationErr('Invalid coupon code')
      setValue('isCouponValid', false)
    }, 1000)
    setTimeout(() => {
      setValue('loading', false)
    }, 1050)
  }, [])

  const handleCartUpdate = useCallback(() => {
    const items = convertObjToArray(itemsObjRef.current)
    dispatch(updateCartItems(items))
    handleCartUpdateStatus(false)
  }, [])

  return (
    <ContentWrapper wrapperClass='cart' heading='Cart'>
      {data.length > 0 ? (
        <>
          <CartItemsTable
            data={data}
            onChangeCount={handleQtyChange}
            onItemRemove={handleItemRemove}
          />
          <CartActions
            {...{register, errors, watch}}
            onSubmit={handleSubmit(handleCouponSubmit)}
            onUpdateCart={handleCartUpdate}
          />
          <CartTotals
            hasValidCoupon={watch('isCouponValid')}
            subtotal={watch('subtotal')}
          />
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
