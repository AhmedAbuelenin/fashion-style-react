import {FooterSocials} from '../index'
import './FooterCopyrightWrapper.scss'

const FooterCopyrightWrapper = () => {
  return (
    <div className='footer__bottom'>
      <FooterSocials />
      <span className='footer__copyright'>
        © 2023 Fashion Style. Proudly powered by Fashion Style
      </span>
    </div>
  )
}

export default FooterCopyrightWrapper
