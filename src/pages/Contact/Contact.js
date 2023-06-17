import {ContentWrapper, Page} from '../../components'
import '../../styles/_global.scss'
import './Contact.scss'
import {ContactDetails, ContactForm, ContactHours} from './index'

const Contact = () => {
  return (
    <Page title='Contact'>
      <ContentWrapper wrapperClass='contact' heading='Contact Us'>
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
      </ContentWrapper>
    </Page>
  )
}

export default Contact
