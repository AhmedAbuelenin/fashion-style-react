import {useCallback, useEffect} from 'react'
import {IoMdCheckmark as CheckIcon} from 'react-icons/io'
import {RxReload as LoadingIcon} from 'react-icons/rx'
import {useDispatch} from 'react-redux'
import {useLoader} from '../../../../hooks'
import {setCartItem} from '../../../../redux/slices'
import {formatProductData} from '../../../../utils'
import './ProductAction.scss'

const ProductAction = props => {
  const {item, isAdded, onAddToCart} = props

  const dispatch = useDispatch()
  const {loading, toggleLoading} = useLoader()

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        toggleLoading()
        onAddToCart()
      }, 1000)
    }
  }, [loading])

  const addProductToCart = useCallback(() => {
    toggleLoading()
    const formattedItem = formatProductData(item)
    dispatch(setCartItem(formattedItem))
  }, [])

  return (
    <button
      className='global-button product-info__button'
      onClick={addProductToCart}>
      ADD TO CART
      {loading ? (
        <LoadingIcon className='product-info__button-icon product-info__loading-icon' />
      ) : isAdded ? (
        <CheckIcon
          color='#ffffff'
          size={20}
          className='product-info__button-icon product-info__check-icon'
        />
      ) : null}
    </button>
  )
}

export default ProductAction
