import {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Loader} from '../../../../components'
import {setFeaturedSelected, toggleItemLoading} from '../../../../redux/slices'
import '../../../../styles/_global.scss'
import {FeaturedCollectionDetails, FeaturedCollectionGallery} from '../../index'
import './FeaturedCollectionList.css'

const FeaturedCollectionList = ({onQuickViewPress, onAddToCart}) => {
  const dispatch = useDispatch()
  const {data, loading, status} = useSelector(state => state.featuredCollection)

  const updateProductLoadingStatus = itemId => {
    dispatch(toggleItemLoading(itemId))
  }

  const markProductAsSelected = itemId => {
    updateProductLoadingStatus(itemId)
    setTimeout(() => {
      dispatch(setFeaturedSelected(itemId))
      updateProductLoadingStatus(itemId)
    }, 1000)
  }

  const handleAddToCartPress = useCallback(item => {
    onAddToCart(item)
    markProductAsSelected(item.code)
  }, [])

  return data.length > 0 ? (
    <ul className='featured-collection__list'>
      {data.map(item => (
        <li key={item.code} className='featured-collection__item'>
          <FeaturedCollectionGallery
            {...{item}}
            onQuickViewPress={() => onQuickViewPress(item)}
          />
          <FeaturedCollectionDetails
            {...{item}}
            onAddToCart={() => handleAddToCartPress(item)}
          />
        </li>
      ))}
    </ul>
  ) : loading ? (
    <div className='centered-container'>
      <Loader />
    </div>
  ) : status !== 'ok' ? (
    <span className='global-general-err-msg'>{status.toUpperCase()}</span>
  ) : null
}

export default FeaturedCollectionList
