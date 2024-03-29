import {memo, useCallback} from 'react'
import {Link} from 'react-router-dom'
import {useVisibleModal} from '../../../hooks'
import {generateItemIDFromCode} from '../../../utils'
import {ProductDetails} from '../../index'
import {ProductModal} from '../index'
import './ProductGallery.scss'

const ProductGallery = ({item}) => {
  const {isModalVisible, toggleVisibleModal} = useVisibleModal()

  const disableClickOnModal = useCallback(event => {
    event.stopPropagation()
  }, [])

  return (
    <>
      <div className='product-gallery__img-container'>
        <Link to={`/productDetailsPage/${generateItemIDFromCode(item.code)}`}>
          <img
            loading='lazy'
            src={item.images[0].baseUrl}
            alt='item img'
            className='product-gallery__img'
          />
        </Link>
        <button
          className='global-button product-gallery__quick-view'
          onClick={toggleVisibleModal}>
          QUICK VIEW
        </button>
      </div>
      {isModalVisible ? (
        <ProductModal
          onModalPress={disableClickOnModal}
          onClose={toggleVisibleModal}>
          <ProductDetails item={item} imgClass={'product-gallery__modal-img'} />
        </ProductModal>
      ) : null}
    </>
  )
}

function areEquals(prevProps, nextProps) {
  return prevProps.item.code === nextProps.item.code
}

export default memo(ProductGallery, areEquals)
