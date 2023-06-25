import {memo} from 'react'
import {ProductGallery, ProductInfo} from './index'
import './ProductList.scss'
import Loader from '../Loader/Loader'

const ProductList = ({loading, data}) => {
  return loading ? (
    <div className='centered-container'>
      <Loader />
    </div>
  ) : data.length > 0 ? (
    <ul className='product-list'>
      {data.map(item => (
        <li key={item.code} className='product-list__item'>
          <ProductGallery {...{item}} />
          <ProductInfo {...{item}} />
        </li>
      ))}
    </ul>
  ) : (
    <p className='product-list__no-data'>Empty content</p>
  )
}

export default memo(ProductList)
