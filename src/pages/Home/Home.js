import './Home.css'
import {useCallback, useEffect, useRef, useState} from 'react'
import {FeaturedCollection, Hero, ItemContent} from './index'
import {getProducts} from '../../services'
import {Modal} from '../../components'

const Home = () => {
  const [data, setData] = useState([])
  const [qty, setQty] = useState('1')
  const [loading, setLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const itemRef = useRef({})

  useEffect(() => {
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

    fetchProducts()
  }, [])

  useEffect(() => {
    const resetQty = () => {
      setQty(1)
    }

    if (!isVisible) {
      resetQty()
    }
  }, [isVisible])

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

  const stopClicksFromChildren = useCallback(event => {
    event.stopPropagation()
  }, [])

  const handleQtyChange = useCallback(event => {
    const maxInputLength = 3
    if (event.target.value.length <= maxInputLength) {
      setQty(event.target.value)
    }
  }, [])

  const handleIncrement = useCallback(() => {
    const maxQty = 999
    if (qty < maxQty) {
      setQty(value => Number(value) + 1)
    }
  }, [qty])

  const handleDecrement = useCallback(() => {
    setQty(value => Number(value) - 1 || 1)
  }, [])

  return (
    <>
      <Hero />
      <div className='content-wrapper'>
        <FeaturedCollection {...{data, loading}} onQuickViewPress={showModal} />
        {isVisible ? (
          <Modal onModalPress={stopClicksFromChildren} onClose={closeModal}>
            <ItemContent
              item={itemRef.current}
              qty={qty}
              onTextChange={handleQtyChange}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
            />
          </Modal>
        ) : null}
      </div>
    </>
  )
}

export default Home
