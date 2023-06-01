import {RiArrowDropDownFill as ArrowIcon} from 'react-icons/ri'
import Select from 'react-select'
import {FieldWrapper} from '../../../components'
import './LocationSelector.scss'

const LocationSelector = props => {
  console.log('LocationSelector is rendering')

  const {required, label, data, selected, onSelect} = props

  return (
    <FieldWrapper {...{required, label}}>
      <Select
        id={label}
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
        onChange={onSelect}
      />
    </FieldWrapper>
  )
}

export default LocationSelector
