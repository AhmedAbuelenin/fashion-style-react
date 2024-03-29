import './SectionWrapper.scss'

const SectionWrapper = props => {
  const {sectionClass = '', headingClass, heading, children} = props

  return (
    <div className={`section ${sectionClass}`}>
      <h2
        data-testid='section-wrapper-heading'
        className={`section__heading ${headingClass}`}>
        {heading}
      </h2>
      {children}
    </div>
  )
}

export default SectionWrapper
