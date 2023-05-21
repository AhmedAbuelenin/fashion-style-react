import './ContentWrapper.css'
import '../../styles/_global.scss'

const ContentWrapper = props => {
  const {wrapperClass, heading, children} = props

  return (
    <div className={`content-wrapper ${wrapperClass}`}>
      <h1 className='global-h1'>{heading}</h1>
      {children}
    </div>
  )
}

export default ContentWrapper
