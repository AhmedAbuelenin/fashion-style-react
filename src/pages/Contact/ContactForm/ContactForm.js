import {useForm} from 'react-hook-form'
import {InputField, Loader, TextAreaField} from '../../../components'
import {SectionWrapper} from '../../../components'
import './ContactForm.scss'

const ContactForm = () => {
  console.log('ContactForm is rendering')

  const {
    register,
    handleSubmit,
    setValue,
    formState: {errors},
    watch
  } = useForm({
    defaultValues: {
      Name: '',
      Email: '',
      Message: '',
      sending: false,
      isSubmittedSuccessfully: false
    }
  })

  const _sending = watch('sending')

  const onSubmit = data => {
    //You can later call a backend service here instead
    setValue('sending', true)

    setTimeout(() => {
      setValue('sending', false)
      setValue('isSubmittedSuccessfully', true)
    }, 1500)
  }

  return (
    <SectionWrapper
      heading='Leave Us a Message'
      className='contact-form__wrapper'>
      {!watch('isSubmittedSuccessfully') ? (
        <form
          action='/#'
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          className='contact-form'>
          <div className='contact-form__inputs-container'>
            <InputField
              data-testid='name'
              required
              label='Name'
              {...{register}}
              pattern={/^(?=(?:.*[a-zA-Z]){3})[a-zA-Z\s]{3,20}$/}
              error={
                errors['Name']?.type === 'required'
                  ? 'This field is required'
                  : errors['Name']?.type === 'pattern'
                  ? 'Please enter between 3 and 20 letters'
                  : ''
              }
            />
            <InputField
              data-testid='email'
              required
              label='Email'
              {...{register}}
              pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
              error={
                errors['Email']?.type === 'required'
                  ? 'This field is required'
                  : errors['Email']?.type === 'pattern'
                  ? 'Please enter a valid email format'
                  : ''
              }
            />
          </div>
          <TextAreaField
            required
            label='Message'
            {...{register}}
            pattern={
              /^(?=(?:.*[a-zA-Z0-9@!#$%^.;,-]){3})[a-zA-Z0-9@!#$%^.;,-\s]{3,800}$/
            }
            error={
              errors['Message']?.type === 'required'
                ? 'This field is required'
                : errors['Message']?.type === 'pattern'
                ? 'Please enter between 3 and 800 chars'
                : ''
            }
          />
          <div className='contact-form__submit-loader'>
            <input
              disabled={_sending}
              type='submit'
              value='SEND MESSAGE'
              className='global-button'
            />
            {_sending ? <Loader /> : null}
          </div>
        </form>
      ) : (
        <p className='contact-form__submission-msg'>
          Thanks for contacting us! We will be in touch with you shortly.
        </p>
      )}
    </SectionWrapper>
  )
}

export default ContactForm
