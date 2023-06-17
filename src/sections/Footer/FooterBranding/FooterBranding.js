import {Logo} from '../../../components'
import './FooterBranding.scss'

const FooterBranding = () => {
  return (
    <div className='footer__logo-container'>
      <Logo wrapperClass='footer__logo' />
      <p className='footer__slogan'>Fashion that fits your lifestyle.</p>
    </div>
  )
}

export default FooterBranding
