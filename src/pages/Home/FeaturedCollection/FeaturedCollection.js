import {Loader} from '../../../components'
import '../../../styles/_global.scss'
import {FeaturedCollectionList} from '../index'
import './FeaturedCollection.css'

const FeaturedCollection = ({featuredResult}) => {
  const {data, loading, status} = featuredResult

  return (
    <div className='featured'>
      <h2 className='featured-collection__heading'>Featured Collection</h2>
      <p className='featured-collection__description'>
        Unleash Your Style with Our Trendsetting Collection of Fashion and Gift
        Products
      </p>
      {data.length > 0 ? (
        <FeaturedCollectionList {...{data}} />
      ) : loading ? (
        <div className='centered-container'>
          <Loader />
        </div>
      ) : status !== 'ok' ? (
        <span className='global-general-err-msg'>{status.toUpperCase()}</span>
      ) : null}
    </div>
  )
}

export default FeaturedCollection
