import {useEffect, useRef, useState} from 'react'
import {useLocation} from 'react-router-dom'
import {ContentWrapper, Loader} from '../../components'
import {getProductsByCategory} from '../../services'
import {capitalizeString} from '../../utils'
import './../../styles/_global.scss'
import './ProductCategory.scss'
import ProductCategoryList from './ProductCategoryList/ProductCategoryList'

const ProductCategory = () => {
  const {pathname} = useLocation()

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const errRef = useRef(null)

  const getProductCategory = () => {
    const categoryName = pathname.replace('/product-category/', '')
    return capitalizeString(categoryName)
  }

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        setLoading(true)
        const _data = await getProductsByCategory(getProductCategory())
        setData(_data.results)
      } catch (error) {
        errRef.current = error
        console.log('🚀 ~ fetchProductsByCategory ~ error:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProductsByCategory()
  }, [])

  return (
    <ContentWrapper
      heading={getProductCategory()}
      wrapperClass='product-category'>
      {loading ? (
        <div className='centered-container'>
          <Loader />
        </div>
      ) : errRef.current ? (
        <span className='global-general-err-msg'>
          {errRef.current.message.toUpperCase()}
        </span>
      ) : (
        <ProductCategoryList {...{data}} />
      )}
    </ContentWrapper>
  )
}

export default ProductCategory
