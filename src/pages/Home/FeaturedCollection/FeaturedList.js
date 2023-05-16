import {useCallback} from 'react'
import {RxReload as LoadingIcon} from 'react-icons/rx'
import {IoMdCheckmark as CheckIcon} from 'react-icons/io'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {Loader} from '../../../components'
import {setFeaturedSelected, toggleItemLoading} from '../../../redux/slices'
import '../../../styles/_global.scss'
import './FeaturedList.css'

const FeaturedList = ({onQuickViewPress, onAddToCart}) => {
  const dispatch = useDispatch()
  const {data, loading, status} = useSelector(state => state.featuredCollection)

  const handleBtnPress = useCallback(item => {
    onAddToCart(item)
    markItemAsSelected(item.code)
  }, [])

  const markItemAsSelected = itemId => {
    updateItemLoadingStatus(itemId)
    setTimeout(() => {
      dispatch(setFeaturedSelected(itemId))
      updateItemLoadingStatus(itemId)
    }, 1000)
  }

  const updateItemLoadingStatus = itemId => {
    dispatch(toggleItemLoading(itemId))
  }

  if (data.length > 0)
    return (
      <ul className='featured__list'>
        {data.map(item => {
          const {code, name, images, price, selected} = item
          return (
            <li key={item.code} className='featured__item'>
              <div className='featured__img-container'>
                <Link to={`/itemDetailsPage/${code.replace('_group_', '')}`}>
                  <img
                    src={images[0].baseUrl}
                    alt='item img'
                    className='featured__img'
                  />
                </Link>
                <button
                  className='global-button featured__quick-view'
                  onClick={() => onQuickViewPress(item)}>
                  QUICK VIEW
                </button>
              </div>
              <div className='featured__details'>
                <span className='featured__name'>{name}</span>
                <span className='featured__price'>${price.value}</span>
                <button
                  className='global-button featured__button'
                  onClick={() => handleBtnPress(item)}>
                  ADD TO CART
                  {item.loading ? (
                    <LoadingIcon className='featured__button-icon featured__loading-icon' />
                  ) : null}
                  {selected && !item.loading ? (
                    <CheckIcon
                      color='#ffffff'
                      size={20}
                      className='featured__button-icon featured__check-icon'
                    />
                  ) : null}
                </button>
                {selected ? (
                  <Link to='/cart' className='featured__view-cart-link'>
                    View cart
                  </Link>
                ) : null}
              </div>
            </li>
          )
        })}
      </ul>
    )

  if (loading)
    return (
      <div className='centered-container'>
        <Loader />
      </div>
    )

  if (status !== 'ok')
    return (
      <div className='centered-container'>
        <span style={{color: 'red', textAlign: 'center'}}>{status}</span>
      </div>
    )
}

export default FeaturedList
