import {useEffect, useRef, useState} from 'react'
import {useLocation} from 'react-router-dom'
import {ContentWrapper, Loader, Page, ProductList} from '../../components'
import {getProductsByCategory} from '../../services'
import {capitalizeString} from '../../utils'
import './../../styles/_global.scss'
import './ProductCategory.scss'

const ProductCategory = () => {
  const {pathname} = useLocation()

  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const errRef = useRef(null)

  const getProductCategory = () => {
    const categoryName = pathname.replace('/shop/product-category/', '')
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
    <Page title={getProductCategory()}>
      <ContentWrapper
        heading={getProductCategory()}
        headingClass='product-category__heading'
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
          <ProductList {...{data}} />
        )}
      </ContentWrapper>
    </Page>
  )
}

export default ProductCategory
