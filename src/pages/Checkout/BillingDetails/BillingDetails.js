import {useEffect, useRef} from 'react'
import {useForm} from 'react-hook-form'
import {RiArrowDropDownFill as ArrowIcon} from 'react-icons/ri'
import Select from 'react-select'
import {InputField, SectionWrapper} from '../../../components'
import {
  getCountries,
  getCountryStates,
  getUniversalApiAuthToken
} from '../../../services'
import {LocationSelector} from '../index'
import './BillingDetails.scss'

const BillingDetails = ({onSubmit}) => {
  const {
    register,
    formState: {errors},
    handleSubmit,
    setValue,
    watch
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      companyName: '',
      countries: [],
      states: [],
      country: null,
      state: null,
      address: '',
      phone: '',
      email: '',
      orderNotes: ''
    }
  })

  console.log('country', watch('country'))

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
    <SectionWrapper heading='Billing Details'>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className='billing-details__form'>
        <div className='billing-details__name-container'>
          <InputField required {...{register}} label='First name' />
          <InputField required {...{register}} label='Last name' />
        </div>
        <InputField {...{register}} label='Company name' />
        <LocationSelector
          required
          label='Country / Region'
          data={watch('countries')}
          value={watch('country')}
          onSelect={handleCountrySelect}
        />
        <LocationSelector
          required
          label='State'
          data={watch('states')}
          selected={watch('state')}
          onSelect={handleStateSelect}
        />
        <InputField required {...{register}} label='Address' />
        <InputField required {...{register}} label='Phone' />
        <InputField required {...{register}} label='Email address' />
      </form>
    </SectionWrapper>
  )
}

export default BillingDetails
