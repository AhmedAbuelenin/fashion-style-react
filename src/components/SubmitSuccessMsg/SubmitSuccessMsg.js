import './SubmitSuccessMsg.scss'

const SubmitSuccessMsg = ({className, children}) => (
  <p
    data-testid='contact-success-msg'
    className={`submit-success-msg ${className}`}>
    {children}
  </p>
)

export default SubmitSuccessMsg
