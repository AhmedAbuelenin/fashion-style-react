import '../../styles/_global.scss'
import './Contact.scss'
import {ContactDetails, ContactForm, ContactHours} from './index'

const Contact = () => {
  return (
    <div className='content-wrapper contact'>
      <h1 className='global-h1'>Contact Us</h1>
      <img
        src={require('../../assets/images/map-location.png')}
        alt='store location img'
        className='contact__img'
      />
      <div className='contact__main'>
        <ContactForm />
        <div className='contact__details-hours'>
          <ContactDetails />
          <ContactHours />
        </div>
      </div>
    </div>
  )
}

export default Contact
