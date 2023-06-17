import {useEffect} from 'react'
import './ContentWrapper.scss'

const ContentWrapper = props => {
  const {wrapperClass = '', headingClass = '', title, heading, children} = props

  useEffect(() => {
    document.title = title
  }, [])

  return (
    <div className={`content-wrapper ${wrapperClass}`}>
      <h1 className={`content-wrapper__heading ${headingClass}`}>{heading}</h1>
      {children}
    </div>
  )
}

export default ContentWrapper
