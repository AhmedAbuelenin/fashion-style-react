import {ProductGallery, ProductInfo} from './index'
import './ProductList.scss'

const ProductList = ({data}) => {
  return (
    <ul className='featured-collection__list'>
      {data.map(item => (
        <li key={item.code} className='featured-collection__item'>
          <ProductGallery {...{item}} />
          <ProductInfo {...{item}} />
        </li>
      ))}
    </ul>
  )
}

export default ProductList
