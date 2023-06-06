import {SectionWrapper} from '../../../components'
import './FeaturedWrapper.scss'

const FeaturedWrapper = props => {
  const {heading, description, children} = props

  return (
    <>
      <SectionWrapper {...{heading}} headingClass='featured__heading'>
        <p className='featured__description'>{description}</p>
        {children}
      </SectionWrapper>
    </>
  )
}

export default FeaturedWrapper
