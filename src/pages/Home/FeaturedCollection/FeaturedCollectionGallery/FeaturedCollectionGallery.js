import {memo} from 'react'
import {Link} from 'react-router-dom'
import {generateItemIDFromCode} from '../../../../utils'
import './FeaturedCollectionGallery.css'

const FeaturedCollectionGallery = ({item, onQuickViewPress}) => {
  console.log('FeaturedCollectionGallery is rendering')

  return (
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
        onClick={onQuickViewPress}>
        QUICK VIEW
      </button>
    </div>
  )
}

function areEquals(prevProps, nextProps) {
  return prevProps.item.code === nextProps.item.code
}
export default memo(FeaturedCollectionGallery, areEquals)
