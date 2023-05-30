import {ContactWrapper} from '../index'
import './ContactHours.scss'

const ContactHours = props => {
  return (
    <ContactWrapper heading='Store Hours' className='contact-hours'>
      <p className='contact-hours__closed-hours'>Sun: Closed</p>
      <p className='contact-hours__open-hours'>Mon to Sat: 10 AM – 5:30 PM</p>
    </ContactWrapper>
  )
}

export default ContactHours
