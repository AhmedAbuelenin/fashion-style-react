import {SectionWrapper, TextAreaField} from '../../../components'
import {getFieldErrMsg} from '../../../utils'
import './AdditionalInfo.scss'

const AdditionalInfo = ({register, errors}) => {
  return (
    <SectionWrapper
      heading='Additional information'
      sectionClass='additional-info'>
      <TextAreaField
        testId={'additional-info-textarea'}
        id='orderNotes'
        label='Order notes'
        {...{register}}
        placeholder='Notes about your order, e.g. special notes for delivery'
        error={getFieldErrMsg(errors, 'orderNotes')}
        containerClass='additional-info__textarea-wrapper'
        textareaClass='additional-info__textarea'
      />
    </SectionWrapper>
  )
}

export default AdditionalInfo
