import './ValidationError.scss'

const ValidationError = ({error}) => {
  return <span className='validation-err-msg'>{error}</span>
}

export default ValidationError
