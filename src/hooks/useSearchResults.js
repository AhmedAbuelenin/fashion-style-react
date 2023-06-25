import {useEffect, useRef, useState} from 'react'
import {getShopProducts} from '../services'

export const useSearchResults = keyword => {
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

  return {loading, matchedProducts, error: errRef.current}
}
