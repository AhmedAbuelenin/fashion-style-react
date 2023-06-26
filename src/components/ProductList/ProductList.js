import {memo} from 'react'
import {ProductGallery, ProductInfo} from './index'
import './ProductList.scss'
import Loader from '../Loader/Loader'

const ProductList = props => {
  const {loading, data, emptyTitle = 'Empty content', emptyTitleClass} = props

  return loading ? (
    <div className='centered-container'>
      <Loader />
    </div>
  ) : data.length > 0 ? (
    <ul className='product-list'>
      {data.map(item => (
        <li key={item.code} className='product-list__item'>
          <ProductGallery item={item} />
          <ProductInfo item={item} />
        </li>
      ))}
    </ul>
  ) : (
    <p className={`product-list__no-data ${emptyTitleClass}`}>{emptyTitle}</p>
  )
}

export default memo(ProductList)
