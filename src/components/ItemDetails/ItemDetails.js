import './ItemDetails.css'
import {Counter} from './../index'

const ItemDetails = props => {
  const {item, qty, onDecrement, onIncrement, onTextChange} = props

  return (
    <div className='item-details'>
      <img src={item.image} alt='item img' className='item-details__img' />
      <div className='item-details__content'>
        <span className='item-details__name'>{item.name}</span>
        <span className='item-details__price'>${item.price}</span>
        <p className='item-details__description'>{item.description}</p>

        <div className='item-details__action-container'>
          <Counter {...{qty, onDecrement, onIncrement, onTextChange}} />
          <button className='global-button item-details__button'>
            ADD TO CART
          </button>
        </div>
        <div className='item-details__divider'></div>
        <span className='item-details__category'>
          CATEGORY:{` ${'categoryName'}`}
        </span>
      </div>
    </div>
  )
}

export default ItemDetails
