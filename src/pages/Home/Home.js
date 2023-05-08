import './Home.css'
import {useEffect, useState} from 'react'
import {FeaturedCollection, Hero} from './index'
import {getProducts} from '../../services'

const Home = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const data = await getProducts()
      setData(data.results)
    } catch (error) {
      console.log('🚀 ~ Home ~ fetchProducts ~ error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='home-wrapper'>
      <Hero />
      <FeaturedCollection {...{data, loading}} />
    </div>
  )
}

export default Home
