import {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'
import {SectionWrapper} from '../../components'
import {getProductsByCategory} from '../../services'
import {capitalizeString} from '../../utils'
import './ProductCategory.scss'
import ProductCategoryList from './ProductCategoryList/ProductCategoryList'

const ProductCategory = () => {
  const {pathname} = useLocation()

  const [data, setData] = useState([])

  const getProductCategory = () => {
    const categoryName = pathname.replace('/product-category/', '')
    return capitalizeString(categoryName)
  }

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        const _data = await getProductsByCategory(getProductCategory())
        setData(_data)
      } catch (error) {
        console.log('🚀 ~ fetchProductsByCategory ~ error:', error)
      }
    }

    fetchProductsByCategory()
  }, [])

  return (
    <SectionWrapper
      heading={getProductCategory()}
      headingClass='product-category__heading'>
      <ProductCategoryList {...{data}} />
    </SectionWrapper>
  )
}

export default ProductCategory
