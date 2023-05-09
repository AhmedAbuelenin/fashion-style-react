import './Home.css'
import {useCallback, useEffect, useRef, useState} from 'react'
import {FeaturedCollection, Hero} from './index'
import {getProducts} from '../../services'
import {ItemModal} from '../../components'

const Home = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const itemRef = useRef({})

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const data = await getProducts()
      setData(data.results)
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }

  const toggleVisibleModal = () => {
    setIsVisible(visible => !visible)
  }

  const showModal = useCallback(item => {
    itemRef.current = item
    toggleVisibleModal()
  }, [])

  const closeModal = useCallback(() => {
    toggleVisibleModal()
  }, [])

  const stopPropagation = useCallback(event => {
    event.stopPropagation()
  }, [])

  return (
    <div className='home-wrapper'>
      <Hero />
      <FeaturedCollection
        {...{data, loading}}
        onQuickViewPress={showModal}
        onItemPress={() => {}}
      />
      {isVisible ? (
        <ItemModal
          item={itemRef.current}
          onClose={closeModal}
          onContentClick={stopPropagation}
        />
      ) : null}
      <div></div>
    </div>
  )
}

export default Home
