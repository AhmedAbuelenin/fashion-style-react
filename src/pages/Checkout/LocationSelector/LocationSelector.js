import {memo} from 'react'
import {RiArrowDropDownFill as ArrowIcon} from 'react-icons/ri'
import Select from 'react-select'
import {FieldWrapper, ValidationError} from '../../../components'
import './LocationSelector.scss'

const LocationSelector = props => {
  const {required, id, label, ariaLabel, Controller, control, data, error} =
    props

  return (
    <FieldWrapper {...{required, label, fieldId: id}}>
      <Controller
        name={id}
        control={control}
        rules={{required: 'This field is required'}}
        render={({field}) => (
          <Select
            id={id}
            aria-label={ariaLabel}
            className='location-select-container'
            classNamePrefix='location-select'
            styles={{
              control: (baseStyles, {isFocused}) => ({
                ...baseStyles,
                border: 'none',
                outline: isFocused
                  ? '0.2rem solid #212121'
                  : '0.1rem solid #212121'
              })
            }}
            options={data}
            components={{
              DropdownIndicator: () => <ArrowIcon color='#888888' size={26} />
            }}
            value={data.find(c => c.value === field.value) || ''}
            onChange={val => field.onChange(val.value)}
          />
        )}
      />
      {error ? <ValidationError {...{error}} /> : null}
    </FieldWrapper>
  )
}

function areEquals(prevProps, nextProps) {
  return (
    prevProps.data === nextProps.data && prevProps.error === nextProps.error
  )
}

export default memo(LocationSelector, areEquals)
