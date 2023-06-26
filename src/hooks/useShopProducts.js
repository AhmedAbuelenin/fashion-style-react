import {useEffect, useRef, useState} from 'react'
import {getShopProducts} from '../services'

export const useShopProducts = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const errRef = useRef(null)

  useEffect(() => {
    const fetchShopProducts = async () => {
      try {
        setLoading(true)
        const _data = await getShopProducts()
        setData(_data.results)
      } catch (error) {
        errRef.current = error
        console.log('🚀 ~ fetchProductsByCategory ~ error:', error)
      } finally {
        setLoading(false)
      }
    }

    if (!loading && data.length === 0) {
      fetchShopProducts()
    }
  }, [])

  return {loading, data, error: errRef.current}
}
