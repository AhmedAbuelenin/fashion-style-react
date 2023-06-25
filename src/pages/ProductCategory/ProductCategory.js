import {useMemo, useRef} from 'react'
import {useLocation} from 'react-router-dom'
import {ContentWrapper, Page, ProductList} from '../../components'
import {useProductCategory} from '../../hooks'
import {capitalizeString} from '../../utils'
import './../../styles/_global.scss'
import './ProductCategory.scss'

const ProductCategory = () => {
  const {pathname} = useLocation()
  const categoryNameRef = useRef('')
  const _categoryName = categoryNameRef.current

  const getProductCategory = () => {
    const categoryName = pathname.replace('/shop/product-category/', '')
    return capitalizeString(categoryName)
  }

  useMemo(() => {
    categoryNameRef.current = getProductCategory()
  }, [])

  const {loading, data, error} = useProductCategory(categoryNameRef.current)

  return (
    <Page title={_categoryName}>
      <ContentWrapper
        heading={_categoryName}
        headingClass='product-category__heading'
        wrapperClass='product-category'>
        {!error ? (
          <ProductList {...{loading, data}} />
        ) : (
          <span className='global-general-err-msg'>
            {error.message.toUpperCase()}
          </span>
        )}
      </ContentWrapper>
    </Page>
  )
}

export default ProductCategory
