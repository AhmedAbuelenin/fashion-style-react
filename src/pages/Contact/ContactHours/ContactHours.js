import {SectionWrapper} from '../../../components'
import './ContactHours.scss'

const ContactHours = props => {
  return (
    <SectionWrapper heading='Store Hours' sectionClass='contact-hours'>
      <p className='contact-hours__closed-hours'>Sun: Closed</p>
      <p className='contact-hours__open-hours'>Mon to Sat: 10 AM – 5:30 PM</p>
    </SectionWrapper>
  )
}

export default ContactHours
