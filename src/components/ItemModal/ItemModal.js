import './ItemModal.css'
import '../../styles/_global.scss'

const ItemModal = ({item, onContentClick, onClose}) => {
  return (
    <div className='item-modal' onClick={onClose}>
      <div className='item-modal__content' onClick={onContentClick}>
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
              <span className='item-modal__operator'>-</span>
              <input type='text' value={1} className='item-modal__input' />
              <span className='item-modal__operator item-modal__plus-operator'>
                +
              </span>
            </div>
            <button className='global-button item-modal__button'>
              ADD TO CART
            </button>
          </div>
          <div className='item-modal__divider'></div>
          <span className='item-modal__category'>
            CATEGORY:{item.categoryName}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ItemModal
