import './ItemDetails.css'

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
          <div className='item-details__count-container'>
            <span onClick={onDecrement} className='item-details__operator'>
              -
            </span>
            <input
              type='number'
              value={qty}
              onChange={onTextChange}
              className='item-details__input'
            />
            <span
              onClick={onIncrement}
              className='item-details__operator item-details__plus-operator'>
              +
            </span>
          </div>
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
