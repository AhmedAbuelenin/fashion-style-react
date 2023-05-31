import './SectionWrapper.scss'

const SectionWrapper = props => {
  const {className, heading, children} = props

  return (
    <div className={`section ${className}`}>
      <h2 className='section__heading'>{heading}</h2>
      {children}
    </div>
  )
}

export default SectionWrapper
