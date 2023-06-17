import {featuredCategories} from '../../../data'
import {FeaturedCategoriesList, FeaturedWrapper} from '../index'
import './FeaturedCategories.scss'

const FeaturedCategories = () => {
  return (
    <FeaturedWrapper
      heading='Featured Categories'
      description='Step Up Your Style Game with Our Featured Fashion Categories'>
      <FeaturedCategoriesList data={featuredCategories} />
    </FeaturedWrapper>
  )
}

export default FeaturedCategories
