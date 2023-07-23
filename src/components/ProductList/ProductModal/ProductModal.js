import {VscChromeClose as CloseIcon} from 'react-icons/vsc'
import '../../../styles/_global.scss'
import './ProductModal.scss'

const ProductModal = props => {
  const {children, onModalPress, onClose} = props

  return (
    <div
      data-testid='product-modal'
      className='product-modal'
      onClick={onClose}>
      <div
        data-testid='product-modal-content'
        className='product-modal__content'
        onClick={onModalPress}>
        <CloseIcon
          data-testid='close-icon'
          className='product-modal__close'
          size={24}
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  )
}

export default ProductModal
