import {VscChromeClose} from 'react-icons/vsc'
import '../../styles/_global.scss'
import './Modal.css'

const Modal = ({children, onModalPress, onClose}) => {
  return (
    <div className='modal' onClick={onClose}>
      <div className='modal__content' onClick={onModalPress}>
        <VscChromeClose
          className='item-modal__close'
          size={24}
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  )
}

export default Modal
