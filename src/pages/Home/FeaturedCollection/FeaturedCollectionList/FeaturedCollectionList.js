import '../../../../styles/_global.scss'
import {FeaturedCollectionDetails, FeaturedCollectionGallery} from '../../index'
import './FeaturedCollectionList.css'

const FeaturedCollectionList = ({data}) => {
  return (
    <ul className='featured-collection__list'>
      {data.map(item => (
        <li key={item.code} className='featured-collection__item'>
          <FeaturedCollectionGallery {...{item}} />
          <FeaturedCollectionDetails {...{item}} />
        </li>
      ))}
    </ul>
  )
}

export default FeaturedCollectionList
