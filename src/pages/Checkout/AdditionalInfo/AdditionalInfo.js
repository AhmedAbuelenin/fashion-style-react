import {SectionWrapper, TextAreaField} from '../../../components'
import './AdditionalInfo.scss'

const AdditionalInfo = ({register}) => {
  return (
    <SectionWrapper
      heading='Additional information'
      className='additional-info'>
      <TextAreaField
        label='Order notes'
        {...{register}}
        placeholder='Notes about your order, e.g. special notes for delivery'
        // pattern={}
        // error={}
        containerClass='additional-info__textarea-wrapper'
        textareaClass='additional-info__textarea'
      />
    </SectionWrapper>
  )
}

export default AdditionalInfo
