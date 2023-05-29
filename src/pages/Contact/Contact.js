import './Contact.css'
import '../../styles/_global.scss'
import {ContactForm} from './index'

const Contact = () => {
  return (
    <div className='content-wrapper contact'>
      <h1 className='global-h1'>Contact Us</h1>
      <img
        src={require('../../assets/images/map-location.png')}
        alt='store location img'
        className='contact__img'
      />
      <ContactForm />
    </div>
  )
}

export default Contact
