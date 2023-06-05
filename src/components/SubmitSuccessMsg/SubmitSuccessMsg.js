import './SubmitSuccessMsg.scss'

const SubmitSuccessMsg = ({className, children}) => (
  <p className={`submit-success-msg ${className}`}>{children}</p>
)

export default SubmitSuccessMsg
