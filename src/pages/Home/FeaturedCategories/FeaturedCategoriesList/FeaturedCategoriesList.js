import {Link} from 'react-router-dom'
import './FeaturedCategoriesList.scss'

const FeaturedCategoriesList = ({data}) => {
  return (
    <ul className='featured-categories__list'>
      {data.map(item => (
        <li key={item.catName} className='featured-categories__item'>
          <Link to='/shop'>
            <img
              src={item.catImgUrl}
              alt='category img'
              className='featured-categories__img'
            />
          </Link>
          <p className='featured-categories__name'>{item.catName}</p>
        </li>
      ))}
    </ul>
  )
}

export default FeaturedCategoriesList
