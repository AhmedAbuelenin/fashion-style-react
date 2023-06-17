import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Loader, ProductList} from '../../../components'
import {getFeaturedCollection} from '../../../redux/thunk'
import '../../../styles/_global.scss'
import {FeaturedWrapper} from '../index'
import './FeaturedCollection.scss'

const FeaturedCollection = () => {
  const dispatch = useDispatch()
  const featuredResult = useSelector(state => state.featuredCollection)

  const {data, loading, status} = featuredResult

  useEffect(() => {
    const fetchProducts = () => {
      dispatch(getFeaturedCollection())
    }

    if (data.length === 0) {
      fetchProducts()
    }
  }, [])

  return (
    <FeaturedWrapper
      heading='Featured Collection'
      description='Unleash Your Style with Our Trendsetting Collection of Fashion and Gift
      Products'>
      {loading ? (
        <div className='centered-container'>
          <Loader />
        </div>
      ) : status !== 'ok' ? (
        <span className='global-general-err-msg'>{status.toUpperCase()}</span>
      ) : (
        <ProductList {...{data}} />
      )}
    </FeaturedWrapper>
  )
}

export default FeaturedCollection
