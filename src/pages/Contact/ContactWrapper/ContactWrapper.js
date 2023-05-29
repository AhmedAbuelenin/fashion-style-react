import './ContactWrapper.css'

const ContactWrapper = ({heading, children}) => {
  return (
    <div className='contact-wrapper'>
      <h2 className='contact-wrapper__heading'>{heading}</h2>
      {children}
    </div>
  )
}

export default ContactWrapper
