import {ContactInfo, ContactWrapper} from '../index'
import './ContactDetails.scss'

const ContactDetails = () => {
  return (
    <ContactWrapper heading='Our Store' className='contact-details'>
      <p className='contact-details__address'>
        Fashion Style Store, ninth Street, 5th Settlement, New Cairo, Egypt
      </p>
      <ContactInfo label='PHONE' value='+20 111 111 2222' />
      <ContactInfo label='EMAIL' value='customerservice@fashionstyle.co' />
    </ContactWrapper>
  )
}

export default ContactDetails
