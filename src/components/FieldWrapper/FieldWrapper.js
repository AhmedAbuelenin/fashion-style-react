import './FieldWrapper.css'
import '../../styles/_global.scss'

const FieldWrapper = props => {
  const {required, label, children} = props

  return (
    <div className='field-wrapper'>
      <label htmlFor={label} className='global-input-label'>
        {label}
        <span
          className={`global-label-mandatory-sign ${
            !required ? 'global-label-optional' : ''
          }`}>
          {required ? '*' : '(optional)'}
        </span>
      </label>
      {children}
    </div>
  )
}

export default FieldWrapper
