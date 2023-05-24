import {useCallback, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {setCartItem} from '../../redux/slices'
import {getFeaturedCollection} from '../../redux/thunk'
import './Home.css'
import {FeaturedCollection, Hero} from './index'

const Home = () => {
  console.log('Home page is rendered')

  const [isProductModalVisible, setIsProductModalVisible] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const dispatch = useDispatch()
  const {data} = useSelector(state => state.featuredCollection)

  useEffect(() => {
    const fetchProducts = () => {
      dispatch(getFeaturedCollection())
    }

    if (data.length === 0) {
      fetchProducts()
    }
  }, [])

  const toggleVisibleProductModal = useCallback(() => {
    setIsProductModalVisible(visible => !visible)
  }, [])

  const prepareSelectedProductToView = item => {
    const _item = {
      name: item?.name,
      description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
      price: item?.price.value,
      image: item?.images[0].baseUrl,
      categoryName: item?.categoryName
    }
    setSelectedProduct(_item)
  }

  const showProductModal = useCallback(item => {
    prepareSelectedProductToView(item)
    toggleVisibleProductModal()
  }, [])

  const disableClickOnProductModal = useCallback(event => {
    event.stopPropagation()
  }, [])

  const addProductToCart = useCallback(item => {
    dispatch(setCartItem(item))
  }, [])

  return (
    <>
      <Hero />
      <div className='content-wrapper'>
        <FeaturedCollection
          {...{data}}
          selectedProduct={selectedProduct}
          isModalVisible={isProductModalVisible}
          onQuickViewPress={showProductModal}
          onAddToCart={addProductToCart}
          onModalPress={disableClickOnProductModal}
          onClose={toggleVisibleProductModal}
        />
      </div>
    </>
  )
}

export default Home
