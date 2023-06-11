import {useEffect, useRef, useState} from 'react'
import {useLocation} from 'react-router-dom'
import {ContentWrapper} from '../../components'
import {getShopProducts} from '../../services'
import './SearchResults.scss'
import SearchResultsList from './SearchResultsList/SearchResultsList'

const SearchResults = () => {
  const {search} = useLocation()
  const keyword = new URLSearchParams(search).get('q')

  const [matchedProducts, setMatchedProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const originalProducts = useRef([])
  const errRef = useRef(null)

  useEffect(() => {
    const filterOriginalProducts = () => {
      const products = originalProducts.current.filter(product =>
        product.name.toLowerCase().includes(keyword.toLowerCase())
      )
      setMatchedProducts(products)
    }

    const fetchShopProducts = async () => {
      try {
        setLoading(true)
        const data = await getShopProducts()
        const _data = data.results
        originalProducts.current = _data
        filterOriginalProducts()
      } catch (error) {
        errRef.current = error
        console.log('🚀 ~ fetchShopProducts ~ error:', error)
      } finally {
        setLoading(false)
      }
    }

    if (originalProducts.current.length === 0) {
      fetchShopProducts()
    } else {
      filterOriginalProducts()
    }
  }, [keyword])

  return (
    <ContentWrapper
      heading={`Search results: “${keyword}”`}
      headingClass='search-results__heading'
      wrapperClass='search-results'>
      {errRef.current ? (
        <span className='global-general-err-msg'>
          {errRef.current.message.toUpperCase()}
        </span>
      ) : (
        <SearchResultsList {...{loading}} data={matchedProducts} />
      )}
    </ContentWrapper>
  )
}

export default SearchResults
