import './Footer.scss'
import {FooterBrandingWrapper, FooterCopyrightWrapper} from './index'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__main'>
        <FooterBrandingWrapper />
        <FooterCopyrightWrapper />
      </div>
    </div>
  )
}

export default Footer
