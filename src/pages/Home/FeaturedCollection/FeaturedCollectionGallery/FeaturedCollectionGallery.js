import {memo, useCallback, useState} from 'react'
import {Link} from 'react-router-dom'
import {ProductDetails} from '../../../../components'
import {generateItemIDFromCode} from '../../../../utils'
import {ProductModal} from '../../index'
import './FeaturedCollectionGallery.css'

const FeaturedCollectionGallery = ({item}) => {
  console.log('FeaturedCollectionGallery is rendering')

  const [isModalVisible, setIsModalVisible] = useState(false)

  const disableClickOnModal = useCallback(event => {
    event.stopPropagation()
  }, [])

  const toggleVisibleModal = useCallback(() => {
    setIsModalVisible(visible => !visible)
  }, [])

  return (
    <>
      <div className='featured-collection__img-container'>
        <Link to={`/productDetailsPage/${generateItemIDFromCode(item.code)}`}>
          <img
            src={item.images[0].baseUrl}
            alt='item img'
            className='featured-collection__img'
          />
        </Link>
        <button
          className='global-button featured-collection__quick-view'
          onClick={toggleVisibleModal}>
          QUICK VIEW
        </button>
      </div>
      {isModalVisible ? (
        <ProductModal
          onModalPress={disableClickOnModal}
          onClose={toggleVisibleModal}>
          <ProductDetails {...{item}} />
        </ProductModal>
      ) : null}
    </>
  )
}

function areEquals(prevProps, nextProps) {
  return prevProps.item.code === nextProps.item.code
}
export default memo(FeaturedCollectionGallery, areEquals)
