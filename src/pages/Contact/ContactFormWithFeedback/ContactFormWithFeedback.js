import {SectionWrapper, SubmitSuccessMsg} from '../../../components'
import {useSuccessfulSubmit} from '../../../hooks'
import ContactForm from '../ContactForm/ContactForm'
import './ContactFormWithFeedback.scss'

const ContactFormWithFeedback = () => {
  const {isSubmitSuccessful, showSuccessMsg} = useSuccessfulSubmit()

  return (
    <SectionWrapper
      heading='Leave Us a Message'
      sectionClass='contact-form__wrapper'>
      {!isSubmitSuccessful ? (
        <ContactForm onSuccessfulSubmit={showSuccessMsg} />
      ) : (
        <SubmitSuccessMsg className='contact-form__submission-msg'>
          Thanks for contacting us! We will be in touch with you shortly.
        </SubmitSuccessMsg>
      )}
    </SectionWrapper>
  )
}

export default ContactFormWithFeedback
