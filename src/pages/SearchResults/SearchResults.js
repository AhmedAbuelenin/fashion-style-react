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
  const errRef = useRef(null)

  useEffect(() => {
    const filterOriginalProducts = data => {
      const products = data.filter(product =>
        product.name.toLowerCase().includes(keyword.toLowerCase())
      )
      setMatchedProducts(products)
    }

    const fetchShopProducts = async () => {
      try {
        setLoading(true)
        const data = await getShopProducts()
        filterOriginalProducts(data.results)
      } catch (error) {
        errRef.current = error
        console.log('🚀 ~ fetchShopProducts ~ error:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchShopProducts()
  }, [])

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
