import {Loader, SectionWrapper} from '../../../components'
import '../../../styles/_global.scss'
import {FeaturedCollectionList} from '../index'
import './FeaturedCollection.scss'

const FeaturedCollection = ({featuredResult}) => {
  const {data, loading, status} = featuredResult

  return (
    <SectionWrapper
      heading='Featured Collection'
      headingClass='featured-collection__heading'>
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
    </SectionWrapper>
  )
}

export default FeaturedCollection
