import {ProductDetails} from '../../../components'
import '../../../styles/_global.scss'
import {ProductModal} from '../index'
import './FeaturedCollection.css'
import FeaturedList from './FeaturedList'

const FeaturedCollection = props => {
  const {
    isModalVisible,
    selectedProduct,
    onQuickViewPress,
    onAddToCart,
    onModalPress,
    onClose
  } = props

  return (
    <div className='featured'>
      <h2 className='featured__heading'>Featured Collection</h2>
      <p className='featured__description'>
        A powerful headline about your product’s features to give focus to your
        chosen product featured
      </p>
      <FeaturedList {...{onQuickViewPress, onAddToCart}} />

      {isModalVisible ? (
        <ProductModal {...{onModalPress, onClose}}>
          <ProductDetails item={selectedProduct} />
        </ProductModal>
      ) : null}
    </div>
  )
}

export default FeaturedCollection
