import {useRef} from 'react'
import '../../styles/_global.scss'
import {Counter} from '../index'
import './ProductDetails.css'

const ProductDetails = props => {
  const {name, price, description, image, categoryName} = props.item

  const itemRef = useRef(props.item)

  const handleCountChange = count => {
    itemRef.current['quantity'] = count
  }

  return (
    <div className='product-details'>
      <img src={image} alt='product img' className='product-details__img' />
      <div className='product-details__content'>
        <span className='product-details__name'>{name}</span>
        <span className='product-details__price'>${price}</span>
        <p className='product-details__description'>{description}</p>

        <div className='product-details__action-container'>
          <Counter onChangeCount={handleCountChange} />
          <button className='global-button product-details__button'>
            ADD TO CART
          </button>
        </div>
        <div className='global-divider product-details__divider'></div>
        <span className='product-details__category'>
          CATEGORY: {`${categoryName}`}
        </span>
      </div>
    </div>
  )
}

export default ProductDetails
