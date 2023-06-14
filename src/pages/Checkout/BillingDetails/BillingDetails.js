import {useEffect, useRef, useState} from 'react'
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
  const {
    register,
    Controller,
    control,
    setValue,
    errors,
    isDirty,
    clearErrors,
    watch
  } = props

  const [countries, setCountries] = useState([])
  const [states, setStates] = useState([])

  const universalApiAuthToken = useRef('')
  const _country = watch('country')

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const authToken = await getAuthToken()
        const data = await getCountries(authToken)
        const formattedData = formatOptions('country', data)
        setCountries(formattedData)
      } catch (error) {
        console.log('🚀 ~ fetchCountries ~ error', error)
      }
    }

    if (countries.length === 0) {
      fetchCountries()
    }
  }, [])

  useEffect(() => {
    const resetState = () => {
      setValue('state', '')
    }

    const fetchStates = async () => {
      try {
        const authToken = await getAuthToken()
        const data = await getCountryStates(authToken, _country)
        const formattedData = formatOptions('state', data)
        setStates(formattedData)
      } catch (error) {
        console.log('🚀 ~ fetchStates ~ error:', error)
      }
    }

    if (_country) {
      fetchStates()
    }

    if (_country && isDirty) {
      resetState()
    }
  }, [_country])

  const getAuthToken = async () => {
    try {
      let authToken = universalApiAuthToken.current
      if (!authToken) {
        const {auth_token} = await getUniversalApiAuthToken()
        universalApiAuthToken.current = auth_token
        return auth_token
      }
      return authToken
    } catch (error) {
      throw error
    }
  }

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
      sectionClass='billing-details-wrapper'>
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
          {...{Controller, control, clearErrors}}
          data={countries}
          error={getFieldErrMsg(errors, 'country')}
        />
        <LocationSelector
          required
          id='state'
          label='State'
          ariaLabel='Select a state'
          {...{Controller, control, clearErrors}}
          data={states}
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
