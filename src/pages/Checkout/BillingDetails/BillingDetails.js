import {useEffect, useRef} from 'react'
import {InputField, SectionWrapper} from '../../../components'
import {
  getCountries,
  getCountryStates,
  getUniversalApiAuthToken
} from '../../../services'
import {getFieldErrMsg} from '../../../utils'
import {LocationSelector} from '../index'
import './BillingDetails.scss'

const BillingDetails = props => {
  const {register, setValue, errors, clearErrors, watch} = props

  const universalApiAuthToken = useRef('')
  const _country = watch('country')

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const {auth_token} = await getUniversalApiAuthToken()
        universalApiAuthToken.current = auth_token
        const data = await getCountries(auth_token)
        const formattedData = formatOptions('country', data)
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
        const formattedData = formatOptions('state', data)
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

  const formatOptions = (type, data) => {
    const formattedOptions = data.map(({country_name, state_name}) => {
      const _value = type === 'country' ? country_name : state_name
      return {value: _value, label: _value}
    })

    return formattedOptions
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
            error={getFieldErrMsg(errors, 'firstName')}
            containerClass='billing-details__first-name'
          />
          <InputField
            required
            {...{register}}
            id='lastName'
            label='Last name'
            error={getFieldErrMsg(errors, 'lastName')}
            containerClass='billing-details__last-name'
          />
        </div>
        <InputField
          {...{register}}
          id='companyName'
          label='Company name'
          error={getFieldErrMsg(errors, 'companyName')}
        />
        <LocationSelector
          required
          id='country'
          label='Country / Region'
          ariaLabel='Select a country or region'
          {...{register, setValue, clearErrors}}
          data={watch('countries')}
          selected={_country}
          error={getFieldErrMsg(errors, 'country')}
        />
        <LocationSelector
          required
          id='state'
          label='State'
          ariaLabel='Select a state'
          {...{register, setValue, clearErrors}}
          data={watch('states')}
          selected={watch('state')}
          error={getFieldErrMsg(errors, 'state')}
        />
        <InputField
          required
          {...{register}}
          id='address'
          label='Address'
          error={getFieldErrMsg(errors, 'address')}
        />
        <InputField
          required
          {...{register}}
          id='phone'
          label='Phone'
          error={getFieldErrMsg(errors, 'phone')}
        />
        <InputField
          required
          {...{register}}
          id='email'
          label='Email address'
          error={getFieldErrMsg(errors, 'email')}
        />
      </form>
    </SectionWrapper>
  )
}

export default BillingDetails
