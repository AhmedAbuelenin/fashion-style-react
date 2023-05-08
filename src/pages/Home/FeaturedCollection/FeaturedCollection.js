import './FeaturedCollection.css'
import '../../../styles/_global.scss'
import {Loader} from '../../../components'

const FeaturedCollection = ({data, loading}) => {
  return (
    <div className='featured'>
      <h2 className='featured__heading'>Featured Collection</h2>
      <p className='featured__description'>
        A powerful headline about your product’s features to give focus to your
        chosen product featured
      </p>

      {!loading ? (
        <ul className='featured__list'>
          {data.map(item => (
            <li key={item.code} className='featured__item'>
              <div className='featured__img-container'>
                <img
                  src={item.images[0].baseUrl}
                  alt='item img'
                  className='featured__img'
                />
                <button className='global-button featured__quick-view'>
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
      ) : (
        <div className='centered-container'>
          <Loader />
        </div>
      )}
    </div>
  )
}

export default FeaturedCollection
