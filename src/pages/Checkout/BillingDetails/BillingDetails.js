import {useEffect, useRef} from 'react'
import {InputField, SectionWrapper} from '../../../components'
import {
  getCountries,
  getCountryStates,
  getUniversalApiAuthToken
} from '../../../services'
import {LocationSelector} from '../index'
import './BillingDetails.scss'

const BillingDetails = props => {
  const {register, setValue, errors, watch} = props

  const universalApiAuthToken = useRef('')
  const _country = watch('country')

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const {auth_token} = await getUniversalApiAuthToken()
        universalApiAuthToken.current = auth_token
        const data = await getCountries(auth_token)
        const formattedData = formatCountries(data)
        setValue('countries', formattedData)
      } catch (error) {
        console.log('🚀 ~ fetchCountries ~ error', error)
      }
    }

    fetchCountries()
  }, [])

  useEffect(() => {
    const resetState = () => {
      setValue('state', null)
    }

    const fetchStates = async () => {
      try {
        const data = await getCountryStates(
          universalApiAuthToken.current,
          _country.value
        )
        const formattedData = formatStates(data)
        setValue('states', formattedData)
      } catch (error) {
        console.log('🚀 ~ fetchStates ~ error:', error)
      }
    }

    if (_country) {
      resetState()
      fetchStates()
    }
  }, [_country])

  const formatCountries = data => {
    const formattedCountries = data.map(({country_name}) => ({
      value: country_name,
      label: country_name
    }))

    return formattedCountries
  }

  const formatStates = data => {
    const formattedStates = data.map(({state_name}) => ({
      value: state_name,
      label: state_name
    }))

    return formattedStates
  }

  const handleCountrySelect = selected => {
    setValue('country', selected)
  }

  const handleStateSelect = selected => {
    setValue('state', selected)
  }

  return (
    <SectionWrapper
      heading='Billing Details'
      className='billing-details-wrapper'>
      <form noValidate className='billing-details__form'>
        <div className='billing-details__name-container'>
          <InputField
            required
            {...{register}}
            id='firstName'
            label='First name'
            pattern={/^(?=(?:.*[a-zA-Z]){3})[a-zA-Z\s]{3,10}$/}
            error={
              errors['firstName']?.type === 'required'
                ? 'This field is required'
                : errors['firstName']?.type === 'pattern'
                ? 'Please enter between 3 and 10 letters'
                : ''
            }
            containerClass='billing-details__first-name'
          />
          <InputField
            required
            {...{register}}
            id='lastName'
            label='Last name'
            pattern={/^(?=(?:.*[a-zA-Z]){3})[a-zA-Z\s]{3,10}$/}
            error={
              errors['lastName']?.type === 'required'
                ? 'This field is required'
                : errors['lastName']?.type === 'pattern'
                ? 'Please enter between 3 and 10 letters'
                : ''
            }
            containerClass='billing-details__last-name'
          />
        </div>
        <InputField
          {...{register}}
          id='companyName'
          label='Company name'
          pattern={/^(?=(?:.*[a-zA-Z]){3}).{3,20}$/}
          error={
            errors['companyName']?.type === 'pattern'
              ? 'Please enter between 3 and 20 letters'
              : ''
          }
        />
        <LocationSelector
          required
          id='country'
          label='Country / Region'
          data={watch('countries')}
          value={watch('country')}
          onSelect={handleCountrySelect}
        />
        <LocationSelector
          required
          id='state'
          label='State'
          data={watch('states')}
          selected={watch('state')}
          onSelect={handleStateSelect}
        />
        <InputField
          required
          {...{register}}
          id='address'
          label='Address'
          pattern={/^(?=(?:.*[a-zA-Z]){3}).{3,20}$/}
          error={
            errors['address']?.type === 'required'
              ? 'This field is required'
              : errors['address']?.type === 'pattern'
              ? 'Please enter between 3 and 20 letters'
              : ''
          }
        />
        <InputField
          required
          {...{register}}
          id='phone'
          label='Phone'
          pattern={/^[0-9]{8,15}$/}
          error={
            errors['phone']?.type === 'required'
              ? 'This field is required'
              : errors['phone']?.type === 'pattern'
              ? 'Please enter between 8 and 15 digits'
              : ''
          }
        />
        <InputField
          required
          {...{register}}
          id='email'
          label='Email address'
          pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
          error={
            errors['email']?.type === 'required'
              ? 'This field is required'
              : errors['email']?.type === 'pattern'
              ? 'Please enter a valid email format'
              : ''
          }
        />
      </form>
    </SectionWrapper>
  )
}

export default BillingDetails
