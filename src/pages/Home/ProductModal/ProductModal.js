import {VscChromeClose as CloseIcon} from 'react-icons/vsc'
import '../../../styles/_global.scss'
import './ProductModal.css'

const ProductModal = props => {
  const {children, onModalPress, onClose} = props

  return (
    <div className='product-modal' onClick={onClose}>
      <div className='product-modal__content' onClick={onModalPress}>
        <CloseIcon
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
