import {SectionWrapper} from '../../../components'
import {FeaturedCategoriesList} from '../index'
import './FeaturedCategories.scss'

const FeaturedCategories = ({data}) => {
  return (
    <SectionWrapper
      heading='Featured Categories'
      headingClass='featured-categories__heading'>
      <p className='featured-categories__description'>
        Step Up Your Style Game with Our Featured Fashion Categories
      </p>
      <FeaturedCategoriesList {...{data}} />
    </SectionWrapper>
  )
}

export default FeaturedCategories
