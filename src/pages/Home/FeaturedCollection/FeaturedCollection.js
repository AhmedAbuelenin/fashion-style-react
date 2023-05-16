import './FeaturedCollection.css'
import '../../../styles/_global.scss'
import FeaturedList from './FeaturedList'

const FeaturedCollection = ({onQuickViewPress, onAddToCart}) => {
  return (
    <div className='featured'>
      <h2 className='featured__heading'>Featured Collection</h2>
      <p className='featured__description'>
        A powerful headline about your product’s features to give focus to your
        chosen product featured
      </p>
      <FeaturedList {...{onQuickViewPress, onAddToCart}} />
    </div>
  )
}

export default FeaturedCollection
