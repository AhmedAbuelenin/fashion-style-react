import {useRef} from 'react'
import '../../styles/_global.scss'
import {Counter} from './../index'
import './ItemDetails.css'

const ItemDetails = props => {
  const {name, price, description, image, categoryName} = props.item

  const itemRef = useRef(props.item)

  const handleCountChange = count => {
    itemRef.current['quantity'] = count
  }

  return (
    <div className='item-details'>
      <img src={image} alt='item img' className='item-details__img' />
      <div className='item-details__content'>
        <span className='item-details__name'>{name}</span>
        <span className='item-details__price'>${price}</span>
        <p className='item-details__description'>{description}</p>

        <div className='item-details__action-container'>
          <Counter onChangeCount={handleCountChange} />
          <button className='global-button item-details__button'>
            ADD TO CART
          </button>
        </div>
        <div className='global-divider item-details__divider'></div>
        <span className='item-details__category'>
          CATEGORY: {`${categoryName}`}
        </span>
      </div>
    </div>
  )
}

export default ItemDetails
