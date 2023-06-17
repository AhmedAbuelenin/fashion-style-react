import {FooterBranding, FooterNavigation} from '../index'
import './FooterBrandingWrapper.scss'

const FooterBrandingWrapper = () => {
  return (
    <div className='footer__branding-wrapper'>
      <FooterBranding />
      <FooterNavigation />
    </div>
  )
}

export default FooterBrandingWrapper
