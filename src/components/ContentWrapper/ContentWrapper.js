import './ContentWrapper.scss'

const ContentWrapper = props => {
  const {wrapperClass, heading, children} = props

  return (
    <div className={`content-wrapper ${wrapperClass}`}>
      <h1 className='content-wrapper__heading'>{heading}</h1>
      {children}
    </div>
  )
}

export default ContentWrapper
