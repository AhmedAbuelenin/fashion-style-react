import {socialsData} from '../../../data'
import './FooterSocials.scss'

const FooterSocials = () => {
  return (
    <div className='footer__social-links'>
      {socialsData.map(social => {
        const Icon = social.iconName
        return (
          <a
            key={social.id}
            title={social.title}
            href={social.href}
            target='_blank'
            rel='noreferrer'
            className='footer__external-link'>
            <Icon />
          </a>
        )
      })}
    </div>
  )
}

export default FooterSocials
