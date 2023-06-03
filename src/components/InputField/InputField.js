import {memo} from 'react'
import '../../styles/_global.scss'
import {FieldWrapper, ValidationError} from '../index'
import './InputField.scss'

const InputField = props => {
  console.log('InputField is rendering')

  const {
    containerClass = '',
    required = false,
    id,
    register,
    pattern,
    label,
    error
  } = props

  return (
    <FieldWrapper
      {...{required, label}}
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
