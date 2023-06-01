import './FieldWrapper.scss'

const FieldWrapper = props => {
  const {className = '', required, label, children} = props

  return (
    <div className={`field-wrapper ${className}`}>
      <label htmlFor={label} className='field-wrapper__label'>
        {label}
        <span
          className={`field-wrapper__mandatory-sign ${
            !required ? 'field-wrapper__optional' : ''
          }`}>
          {required ? '*' : '(optional)'}
        </span>
      </label>
      {children}
    </div>
  )
}

export default FieldWrapper
