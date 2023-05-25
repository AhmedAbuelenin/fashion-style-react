import {useCallback} from 'react'
import {IoMdCheckmark as CheckIcon} from 'react-icons/io'
import {RxReload as LoadingIcon} from 'react-icons/rx'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {
  setCartItem,
  setFeaturedSelected,
  toggleItemLoading
} from '../../../../redux/slices'
import {formatProductData} from '../../../../utils'
import './FeaturedCollectionDetails.css'

const FeaturedCollectionDetails = ({item}) => {
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
    <div className='featured-collection__details'>
      <span className='featured-collection__name'>{name}</span>
      <span className='featured-collection__price'>${price.value}</span>
      <button
        className='global-button featured-collection__button'
        onClick={addProductToCart}>
        ADD TO CART
        {loading ? (
          <LoadingIcon className='featured-collection__button-icon featured-collection__loading-icon' />
        ) : selected ? (
          <CheckIcon
            color='#ffffff'
            size={20}
            className='featured-collection__button-icon featured-collection__check-icon'
          />
        ) : null}
      </button>
      {selected ? (
        <Link to='/cart' className='featured-collection__view-cart-link'>
          View cart
        </Link>
      ) : null}
    </div>
  )
}

export default FeaturedCollectionDetails
