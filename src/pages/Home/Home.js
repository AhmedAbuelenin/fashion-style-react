import './Home.css'
import {useCallback, useEffect, useRef, useState} from 'react'
import {FeaturedCollection, Hero, ItemModal} from './index'
import {ItemDetails} from '../../components'
import {useDispatch, useSelector} from 'react-redux'
import {getFeaturedCollection} from '../../redux/thunk'
import {setCartItem} from '../../redux/slices'

const Home = () => {
  console.log('Home page is rendered')

  const [isVisible, setIsVisible] = useState(false)

  const dispatch = useDispatch()
  const {data} = useSelector(state => state.featuredCollection)
  const itemRef = useRef(null)
  const item = itemRef.current
  const _item = {
    name: item?.name,
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
    price: item?.price.value,
    image: item?.images[0].baseUrl
  }

  useEffect(() => {
    const fetchProducts = () => {
      dispatch(getFeaturedCollection())
    }

    if (data.length === 0) {
      fetchProducts()
    }
  }, [])

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

  const addItemToCart = useCallback(item => {
    dispatch(setCartItem(item))
  }, [])

  return (
    <>
      <Hero />
      <div className='content-wrapper'>
        <FeaturedCollection
          {...{data}}
          onQuickViewPress={showModal}
          onAddToCart={addItemToCart}
        />

        {isVisible ? (
          <ItemModal onModalPress={stopClicksFromChildren} onClose={closeModal}>
            <ItemDetails item={_item} />
          </ItemModal>
        ) : null}
      </div>
    </>
  )
}

export default Home
