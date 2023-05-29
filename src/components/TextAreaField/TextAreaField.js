import {memo} from 'react'
import {FieldWrapper} from '../index'
import './TextAreaField.css'

const TextAreaField = props => {
  console.log('TextAreaField is rendering')

  const {label, required = false, register, pattern, error} = props

  return (
    <FieldWrapper {...{required, label}}>
      <textarea
        cols='50'
        rows='12'
        id={label}
        name={label}
        {...register(label, {
          required,
          pattern
        })}
        className='global-text-input'
      />
      {error ? <span className='global-err-msg'>{error}</span> : null}
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
