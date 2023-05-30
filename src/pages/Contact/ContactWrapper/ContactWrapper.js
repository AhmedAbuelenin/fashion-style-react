import './ContactWrapper.css'

const ContactWrapper = props => {
  const {className = '', heading, children} = props

  return (
    <div className={`contact-wrapper ${className}`}>
      <h3 className='contact-wrapper__heading'>{heading}</h3>
      {children}
    </div>
  )
}

export default ContactWrapper
