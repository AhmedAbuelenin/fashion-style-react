import {ProductGallery, ProductInfo} from './index'
import './ProductList.scss'

const ProductList = ({data}) => {
  return data.length > 0 ? (
    <ul className='product-list'>
      {data.map(item => (
        <li key={item.code} className='product-list__item'>
          <ProductGallery {...{item}} />
          <ProductInfo {...{item}} />
        </li>
      ))}
    </ul>
  ) : (
    <p className='product-category-list__no-data'>Empty content</p>
  )
}

export default ProductList
