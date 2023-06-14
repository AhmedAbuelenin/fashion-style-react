import {memo, useCallback} from 'react'
import {RiArrowDropDownFill as ArrowIcon} from 'react-icons/ri'
import Select from 'react-select'
import {FieldWrapper, ValidationError} from '../../../components'
import './LocationSelector.scss'

const LocationSelector = props => {
  const {
    required,
    id,
    label,
    ariaLabel,
    register,
    setValue,
    data,
    selected,
    error,
    clearErrors
  } = props

  const handleSelect = useCallback(selected => {
    setValue(id, selected)
    clearErrors(id)
  }, [])

  return (
    <FieldWrapper {...{required, label, fieldId: id}}>
      <Select
        id={id}
        {...register(id)}
        className='location-select-container'
        classNamePrefix='location-select'
        styles={{
          control: (baseStyles, {isFocused}) => ({
            ...baseStyles,
            border: 'none',
            outline: isFocused ? '0.2rem solid #212121' : '0.1rem solid #212121'
          })
        }}
        options={data}
        components={{
          DropdownIndicator: () => <ArrowIcon color='#888888' size={26} />
        }}
        value={selected}
        onChange={handleSelect}
        aria-label={ariaLabel}
      />
      {error ? <ValidationError {...{error}} /> : null}
    </FieldWrapper>
  )
}

function areEquals(prevProps, nextProps) {
  return (
    prevProps.data === nextProps.data &&
    prevProps.selected === nextProps.selected &&
    prevProps.error === nextProps.error
  )
}

export default memo(LocationSelector, areEquals)
