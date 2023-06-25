import {ProductList} from '../../../components'
import {useFeaturedCollection} from '../../../hooks'
import '../../../styles/_global.scss'
import {FeaturedWrapper} from '../index'
import './FeaturedCollection.scss'

const FeaturedCollection = () => {
  const {data, loading, status} = useFeaturedCollection()

  const isStatusOk = status === 'ok'

  return (
    <FeaturedWrapper
      heading='Featured Collection'
      description='Unleash Your Style with Our Trendsetting Collection of Fashion and Gift
      Products'>
      {isStatusOk ? (
        <ProductList {...{loading, data}} />
      ) : (
        <span className='global-general-err-msg'>{status.toUpperCase()}</span>
      )}
    </FeaturedWrapper>
  )
}

export default FeaturedCollection
