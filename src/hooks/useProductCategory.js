import {useEffect, useRef, useState} from 'react'
import {getProductsByCategory} from '../services'

export const useProductCategory = category => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const errRef = useRef(null)

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        setLoading(true)
        const _data = await getProductsByCategory(category)
        setData(_data)
      } catch (error) {
        errRef.current = error
        console.log('🚀 ~ fetchProductsByCategory ~ error:', error)
      } finally {
        setLoading(false)
      }
    }

    if (!loading && data.length === 0) {
      fetchProductsByCategory()
    }
  })

  return {loading, data, error: errRef.current}
}
