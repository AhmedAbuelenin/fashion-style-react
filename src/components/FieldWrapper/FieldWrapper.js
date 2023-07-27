import './FieldWrapper.scss'

const FieldWrapper = props => {
  const {className = '', required, fieldId, label, children} = props

  const requiredClass = !required ? 'field-wrapper__sign--optional' : ''

  return (
    <div className={`field-wrapper ${className}`}>
      <label
        data-testid='field-label'
        htmlFor={fieldId}
        className='field-wrapper__label'>
        {label}
        <span
          data-testid='field-state'
          className={`field-wrapper__sign--mandatory ${requiredClass}`}>
          {required ? '*' : '(optional)'}
        </span>
      </label>
      {children}
    </div>
  )
}

export default FieldWrapper
