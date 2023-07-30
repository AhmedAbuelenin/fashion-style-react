import './ValidationError.scss'

const ValidationError = ({error}) => {
  return (
    <span data-testid='validation-error' className='validation-err-msg'>
      {error}
    </span>
  )
}

export default ValidationError
