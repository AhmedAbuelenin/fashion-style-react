import {Link} from 'react-router-dom'
import {useCartItemAdded} from '../../../hooks'
import ProductAction from './ProductAction/ProductAction'
import './ProductInfo.scss'

const ProductInfo = ({item}) => {
  const {isAdded, markAsAdded} = useCartItemAdded()

  return (
    <div className='product-info'>
      <p className='product-info__name'>{item.name}</p>
      <span className='product-info__price'>${item.price.value}</span>
      <ProductAction item={item} isAdded={isAdded} onAddToCart={markAsAdded} />
      {isAdded ? (
        <Link to='/cart' className='product-info__view-cart-link'>
          View cart
        </Link>
      ) : null}
    </div>
  )
}

export default ProductInfo
