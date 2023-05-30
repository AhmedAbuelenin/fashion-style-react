import {memo} from 'react'
import {FieldWrapper, ValidationError} from '../index'
import './TextAreaField.scss'

const TextAreaField = props => {
  console.log('TextAreaField is rendering')

  const {label, required = false, register, pattern, error} = props

  return (
    <FieldWrapper {...{required, label}} className='textarea-wrapper'>
      <textarea
        id={label}
        name={label}
        {...register(label, {
          required,
          pattern
        })}
        className='textarea-wrapper__field'
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

export default memo(TextAreaField, areEquals)
