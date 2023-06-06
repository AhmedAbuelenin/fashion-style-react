import {FeaturedCategoriesList, FeaturedWrapper} from '../index'
import './FeaturedCategories.scss'

const FeaturedCategories = ({data}) => {
  return (
    <FeaturedWrapper
      heading='Featured Categories'
      description='Step Up Your Style Game with Our Featured Fashion Categories'>
      <FeaturedCategoriesList {...{data}} />
    </FeaturedWrapper>
  )
}

export default FeaturedCategories
