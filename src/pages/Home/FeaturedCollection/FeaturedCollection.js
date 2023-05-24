import {ProductDetails} from '../../../components'
import '../../../styles/_global.scss'
import {ProductModal, FeaturedCollectionList} from '../index'
import './FeaturedCollection.css'

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
      <h2 className='featured-collection__heading'>Featured Collection</h2>
      <p className='featured-collection__description'>
        A powerful headline about your product’s features to give focus to your
        chosen product featured
      </p>
      <FeaturedCollectionList {...{onQuickViewPress, onAddToCart}} />

      {isModalVisible ? (
        <ProductModal {...{onModalPress, onClose}}>
          <ProductDetails item={selectedProduct} />
        </ProductModal>
      ) : null}
    </div>
  )
}

export default FeaturedCollection
