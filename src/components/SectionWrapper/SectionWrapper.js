import './SectionWrapper.scss'

const SectionWrapper = props => {
  const {className, headingClass, heading, children} = props

  return (
    <div className={`section ${className}`}>
      <h2 className={`section__heading ${headingClass}`}>{heading}</h2>
      {children}
    </div>
  )
}

export default SectionWrapper
