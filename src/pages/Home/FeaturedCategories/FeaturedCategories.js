import {memo} from 'react'
import {FeaturedCategoriesList, FeaturedWrapper} from '../index'
import './FeaturedCategories.scss'

const FeaturedCategories = ({data}) => {
  console.log('FeaturedCategories is rendering')

  return (
    <FeaturedWrapper
      heading='Featured Categories'
      description='Step Up Your Style Game with Our Featured Fashion Categories'>
      <FeaturedCategoriesList {...{data}} />
    </FeaturedWrapper>
  )
}

export default memo(FeaturedCategories)
