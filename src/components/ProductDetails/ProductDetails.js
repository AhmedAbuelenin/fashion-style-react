import '../../styles/_global.scss'
import {formatProductData} from '../../utils'
import './ProductDetails.css'
import ProductDetailsAction from './ProductDetailsAction/ProductDetailsAction'

const ProductDetails = ({item}) => {
  console.log('ProductDetails is rendering')

  const formattedItem = formatProductData(item)

  const {name, price, description, image, categoryName} = formattedItem

  return (
    <div className='product-details'>
      <img src={image} alt='product img' className='product-details__img' />
      <div className='product-details__content'>
        <span className='product-details__name'>{name}</span>
        <span className='product-details__price'>${price}</span>
        <p className='product-details__description'>{description}</p>
        <ProductDetailsAction item={formattedItem} />
        <hr className='global-divider product-details__divider' />
        <span className='product-details__category'>
          CATEGORY: {`${categoryName}`}
        </span>
      </div>
    </div>
  )
}

export default ProductDetails
