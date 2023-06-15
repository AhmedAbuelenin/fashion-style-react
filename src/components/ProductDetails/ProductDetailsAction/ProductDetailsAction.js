import {useCallback, useRef} from 'react'
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {setCartItem} from '../../../redux/slices'
import {generateItemIDFromCode} from '../../../utils'
import Counter from '../../Counter/Counter'
import './ProductDetailsAction.scss'

const ProductDetailsAction = ({item}) => {
  const dispatch = useDispatch()
  const itemRef = useRef(item)

  const handleCountChange = useCallback(count => {
    itemRef.current['quantity'] = count
  }, [])

  const addProductToCart = useCallback(() => {
    dispatch(setCartItem(itemRef.current))
  }, [])

  return (
    <div className='product-details__action-container'>
      <Counter onChangeCount={handleCountChange} />
      <Link
        to={`/productDetailsPage/${generateItemIDFromCode(item.code)}`}
        className='global-button product-details__button'
        onClick={addProductToCart}>
        ADD TO CART
      </Link>
    </div>
  )
}

export default ProductDetailsAction
