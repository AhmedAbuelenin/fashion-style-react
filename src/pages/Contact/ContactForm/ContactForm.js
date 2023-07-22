import {yupResolver} from '@hookform/resolvers/yup'
import {memo} from 'react'
import {useForm} from 'react-hook-form'
import {
  InputField,
  Loader,
  SectionWrapper,
  TextAreaField
} from '../../../components'
import {getFieldErrMsg} from '../../../utils'
import './ContactForm.scss'
import ContactFormValidation from './ContactFormValidation'

const ContactForm = ({onSuccessfulSubmit}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: {errors},
    watch
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
      sending: false,
      isSubmittedSuccessfully: false
    },
    resolver: yupResolver(ContactFormValidation)
  })

  const _sending = watch('sending')

  const onSubmit = data => {
    //You can later call a backend service here instead
    setValue('sending', true)
    setTimeout(() => {
      setValue('sending', false)
      onSuccessfulSubmit()
    }, 1500)
  }

  return (
    <form
      data-testid='contact-form'
      action='/#'
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className='contact-form'>
      <div className='contact-form__inputs-container'>
        <InputField
          data-testid='name'
          required
          id='name'
          label='Name'
          {...{register}}
          pattern={/^(?=(?:.*[a-zA-Z]){3})[a-zA-Z\s]{3,20}$/}
          error={getFieldErrMsg(errors, 'name')}
        />
        <InputField
          data-testid='email'
          required
          id='email'
          label='Email'
          {...{register}}
          error={getFieldErrMsg(errors, 'email')}
        />
      </div>
      <TextAreaField
        required
        id='message'
        label='Message'
        {...{register}}
        error={getFieldErrMsg(errors, 'message')}
      />
      <div className='contact-form__submit-loader'>
        <input
          data-testid='contact-submit-button'
          disabled={_sending}
          type='submit'
          value='SEND MESSAGE'
          className='global-button'
        />
        {_sending ? <Loader /> : null}
      </div>
    </form>
  )
}

export default memo(ContactForm)
