import {IoMdCheckmark as CheckIcon} from 'react-icons/io'
import {RxReload as LoadingIcon} from 'react-icons/rx'
import {Link} from 'react-router-dom'
import './FeaturedCollectionDetails.css'

const FeaturedCollectionDetails = ({item, onAddToCart}) => {
  const {name, price, selected, loading} = item

  return (
    <div className='featured-collection__details'>
      <span className='featured-collection__name'>{name}</span>
      <span className='featured-collection__price'>${price.value}</span>
      <button
        className='global-button featured-collection__button'
        onClick={onAddToCart}>
        ADD TO CART
        {loading ? (
          <LoadingIcon className='featured-collection__button-icon featured-collection__loading-icon' />
        ) : selected ? (
          <CheckIcon
            color='#ffffff'
            size={20}
            className='featured-collection__button-icon featured-collection__check-icon'
          />
        ) : null}
      </button>
      {selected ? (
        <Link to='/cart' className='featured-collection__view-cart-link'>
          View cart
        </Link>
      ) : null}
    </div>
  )
}

export default FeaturedCollectionDetails
