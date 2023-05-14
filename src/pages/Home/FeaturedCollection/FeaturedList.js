import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {Loader} from '../../../components'
import '../../../styles/_global.scss'
import './FeaturedList.css'

const FeaturedList = ({onQuickViewPress}) => {
  const {data, loading, status} = useSelector(state => state.featuredCollection)

  if (data.length > 0)
    return (
      <ul className='featured__list'>
        {data.map(item => (
          <li key={item.code} className='featured__item'>
            <div className='featured__img-container'>
              <Link to={`/itemDetailsPage/${item.code.replace('_group_', '')}`}>
                <img
                  src={item.images[0].baseUrl}
                  alt='item img'
                  className='featured__img'
                />
              </Link>
              <button
                className='global-button featured__quick-view'
                onClick={() => onQuickViewPress(item)}>
                QUICK VIEW
              </button>
            </div>
            <div className='featured__details'>
              <span className='featured__name'>{item.name}</span>
              <span className='featured__price'>${item.price.value}</span>
              <button className='global-button'>ADD TO CART</button>
            </div>
          </li>
        ))}
      </ul>
    )

  if (loading)
    return (
      <div className='centered-container'>
        <Loader />
      </div>
    )

  if (status !== 'ok')
    return (
      <div className='centered-container'>
        <span style={{color: 'red', textAlign: 'center'}}>{status}</span>
      </div>
    )
}

export default FeaturedList
