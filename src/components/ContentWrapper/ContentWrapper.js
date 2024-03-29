import './ContentWrapper.scss'

const ContentWrapper = props => {
  const {wrapperClass = '', headingClass = '', heading, children} = props

  return (
    <div className={`content-wrapper ${wrapperClass}`}>
      <h1 data-testid='content-wrapper-heading' className={`content-wrapper__heading ${headingClass}`}>{heading}</h1>
      {children}
    </div>
  )
}

export default ContentWrapper
