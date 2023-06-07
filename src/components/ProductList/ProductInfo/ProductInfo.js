import {useCallback} from 'react'
import {IoMdCheckmark as CheckIcon} from 'react-icons/io'
import {RxReload as LoadingIcon} from 'react-icons/rx'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {
  setCartItem,
  setFeaturedSelected,
  toggleItemLoading
} from '../../../redux/slices'
import {formatProductData} from '../../../utils'
import './ProductInfo.scss'

const ProductInfo = ({item}) => {
  const {name, price, selected, loading} = item

  const dispatch = useDispatch()

  const updateProductLoadingStatus = itemId => {
    dispatch(toggleItemLoading(itemId))
  }

  const markProductAsSelected = itemId => {
    updateProductLoadingStatus(itemId)
    setTimeout(() => {
      dispatch(setFeaturedSelected(itemId))
      updateProductLoadingStatus(itemId)
    }, 1000)
  }

  const addProductToCart = useCallback(() => {
    const formattedItem = formatProductData(item)
    markProductAsSelected(formattedItem.code)
    dispatch(setCartItem(formattedItem))
  }, [])

  return (
    <div className='product-info'>
      <span className='product-info__name'>{name}</span>
      <span className='product-info__price'>${price.value}</span>
      <button
        className='global-button product-info__button'
        onClick={addProductToCart}>
        ADD TO CART
        {loading ? (
          <LoadingIcon className='product-info__button-icon product-info__loading-icon' />
        ) : selected ? (
          <CheckIcon
            color='#ffffff'
            size={20}
            className='product-info__button-icon product-info__check-icon'
          />
        ) : null}
      </button>
      {selected ? (
        <Link to='/cart' className='product-info__view-cart-link'>
          View cart
        </Link>
      ) : null}
    </div>
  )
}

export default ProductInfo
