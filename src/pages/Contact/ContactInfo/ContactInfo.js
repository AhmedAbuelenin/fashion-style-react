import './ContactInfo.scss'

const ContactInfo = ({label, value}) => {
  return (
    <p className='contact-details__info'>
      {label}:
      <br />
      <br />
      <span className='contact-details__value'>{value}</span>
    </p>
  )
}

export default ContactInfo
