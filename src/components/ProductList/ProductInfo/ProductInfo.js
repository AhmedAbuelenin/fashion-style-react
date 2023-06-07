import {useCallback, useEffect, useState} from 'react'
import {IoMdCheckmark as CheckIcon} from 'react-icons/io'
import {RxReload as LoadingIcon} from 'react-icons/rx'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {setCartItem} from '../../../redux/slices'
import {formatProductData} from '../../../utils'
import './ProductInfo.scss'

const ProductInfo = ({item}) => {
  console.log('ProductInfo is rendering')

  const {name, price} = item

  const dispatch = useDispatch()

  const [loading, setLoading] = useState(false)
  const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        toggleLoading()
        markAsSelected()
      }, 1000)
    }
  }, [loading])

  const toggleLoading = () => {
    setLoading(status => !status)
  }

  const markAsSelected = () => {
    setIsSelected(true)
  }

  const addProductToCart = useCallback(() => {
    toggleLoading()
    const formattedItem = formatProductData(item)
    dispatch(setCartItem(formattedItem))
  }, [])

  return (
    <div className='product-info'>
      <p className='product-info__name'>{name}</p>
      <span className='product-info__price'>${price.value}</span>
      <button
        className='global-button product-info__button'
        onClick={addProductToCart}>
        ADD TO CART
        {loading ? (
          <LoadingIcon className='product-info__button-icon product-info__loading-icon' />
        ) : isSelected ? (
          <CheckIcon
            color='#ffffff'
            size={20}
            className='product-info__button-icon product-info__check-icon'
          />
        ) : null}
      </button>
      {isSelected ? (
        <Link to='/cart' className='product-info__view-cart-link'>
          View cart
        </Link>
      ) : null}
    </div>
  )
}

export default ProductInfo
