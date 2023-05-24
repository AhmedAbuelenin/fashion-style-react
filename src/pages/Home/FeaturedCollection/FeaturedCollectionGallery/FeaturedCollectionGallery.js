import {memo} from 'react'
import {Link} from 'react-router-dom'
import {generateItemIDFromCode} from '../../../../utils'
import './FeaturedCollectionGallery.css'

const FeaturedCollectionGallery = ({item, onQuickViewPress}) => {
  console.log('FeaturedCollectionGallery is rendering')

  return (
    <Link
      to={`/productDetailsPage/${generateItemIDFromCode(item.code)}`}
      className='featured-collection__img-container'>
      <img
        src={item.images[0].baseUrl}
        alt='item img'
        className='featured-collection__img'
      />
      <button
        className='global-button featured-collection__quick-view'
        onClick={onQuickViewPress}>
        QUICK VIEW
      </button>
    </Link>
  )
}

function areEquals(prevProps, nextProps) {
  return prevProps.item.code === nextProps.item.code
}
export default memo(FeaturedCollectionGallery, areEquals)
