import {memo} from 'react'
import {FieldWrapper, ValidationError} from '../index'
import './TextAreaField.scss'

const TextAreaField = props => {
  console.log('TextAreaField is rendering')

  const {
    containerClass = '',
    textareaClass = '',
    id,
    label,
    placeholder,
    required = false,
    register,
    pattern,
    error
  } = props

  return (
    <FieldWrapper
      {...{required, label}}
      className={`textarea-wrapper ${containerClass}`}>
      <textarea
        {...{id}}
        name={id}
        {...{placeholder}}
        {...register(id, {
          required,
          pattern
        })}
        className={`textarea-wrapper__field ${textareaClass}`}
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
