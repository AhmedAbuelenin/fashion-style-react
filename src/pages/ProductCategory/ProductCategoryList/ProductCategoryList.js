import {ProductList} from '../../../components'
import './ProductCategoryList.scss'

const ProductCategoryList = ({data}) => {
  return data.length > 0 ? (
    <ProductList {...{data}} />
  ) : (
    <p className='product-category-list__no-data'>Empty content</p>
  )
}

export default ProductCategoryList
