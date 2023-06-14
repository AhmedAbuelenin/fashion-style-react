import {memo} from 'react'
import {FieldWrapper, ValidationError} from '../index'
import './InputField.scss'

const InputField = props => {
  const {
    containerClass = '',
    required = false,
    id,
    label,
    register,
    pattern,
    error
  } = props

  return (
    <FieldWrapper
      {...{required, label, fieldId: id}}
      className={`input-wrapper ${containerClass}`}>
      <input
        {...{id}}
        name={id}
        {...register(id, {
          required,
          pattern
        })}
        className='input-wrapper__field'
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
