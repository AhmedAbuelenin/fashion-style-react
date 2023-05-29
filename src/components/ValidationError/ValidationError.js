import './ValidationError.css'

const ValidationError = ({error}) => {
  return <span className='validation-err-msg'>{error}</span>
}

export default ValidationError
