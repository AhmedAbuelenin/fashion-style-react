import {ProductGallery, ProductInfo} from './index'
import './ProductList.scss'

const ProductList = ({data}) => {
  return (
    <ul className='product-list'>
      {data.map(item => (
        <li key={item.code} className='product-list__item'>
          <ProductGallery {...{item}} />
          <ProductInfo {...{item}} />
        </li>
      ))}
    </ul>
  )
}

export default ProductList
