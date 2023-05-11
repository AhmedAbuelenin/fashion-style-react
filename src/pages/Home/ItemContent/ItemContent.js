import './ItemContent.css'

const ItemContent = props => {
  const {item, qty, onDecrement, onIncrement, onTextChange} = props

  return (
    <>
      <div className='item-modal__img-container'>
        <img
          src={item.images[0].baseUrl}
          alt='item img'
          className='item-modal__img'
        />
      </div>
      <div className='item-modal__details'>
        <span className='item-modal__name'>{item.name}</span>
        <span className='item-modal__price'>${item.price.value}</span>
        <p className='item-modal__description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus
          congue nisi.
        </p>

        <div className='item-modal__action-container'>
          <div className='item-modal__count-container'>
            <span onClick={onDecrement} className='item-modal__operator'>
              -
            </span>
            <input
              type='number'
              value={qty}
              onChange={onTextChange}
              className='item-modal__input'
            />
            <span
              onClick={onIncrement}
              className='item-modal__operator item-modal__plus-operator'>
              +
            </span>
          </div>
          <button className='global-button item-modal__button'>
            ADD TO CART
          </button>
        </div>
        <div className='item-modal__divider'></div>
        <span className='item-modal__category'>
          CATEGORY:{` ${item.categoryName}`}
        </span>
      </div>
    </>
  )
}

export default ItemContent
