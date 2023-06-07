import {Loader, ProductList} from '../../../components'
import '../../../styles/_global.scss'
import {FeaturedWrapper} from '../index'
import './FeaturedCollection.scss'

const FeaturedCollection = ({featuredResult}) => {
  const {data, loading, status} = featuredResult

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
