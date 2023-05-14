import {VscChromeClose as CloseIcon} from 'react-icons/vsc'
import '../../../styles/_global.scss'
import './ItemModal.css'

const ItemModal = ({children, onModalPress, onClose}) => {
  return (
    <div className='item-modal' onClick={onClose}>
      <div className='item-modal__content' onClick={onModalPress}>
        <CloseIcon className='item-modal__close' size={24} onClick={onClose} />
        {children}
      </div>
    </div>
  )
}

export default ItemModal
