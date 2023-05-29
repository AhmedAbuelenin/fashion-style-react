import {memo} from 'react'
import '../../styles/_global.scss'
import {FieldWrapper, ValidationError} from '../index'
import './InputField.css'

const InputField = props => {
  console.log('InputField is rendering')

  const {required = false, register, pattern, label, error} = props

  return (
    <FieldWrapper {...{required, label}}>
      <input
        id={label}
        name={label}
        {...register(label, {
          required,
          pattern
        })}
        className='global-text-input'
      />
      {error ? <ValidationError {...{error}} /> : null}
    </FieldWrapper>
  )
}

function areEquals(prevProps, nextProps) {
  return (
    prevProps.register === nextProps.register &&
    prevProps.error === nextProps.error
  )
}

export default memo(InputField, areEquals)
