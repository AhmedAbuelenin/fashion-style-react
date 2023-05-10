import './Footer.css'
import {mainPagesLinks, otherPageLinks, socialLinks} from '../../data'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__content'>
        <div className='footer__top'>
          <div className='footer__logo-container'>
            <span>Fashion Mode</span>
            <p className='footer__slogan'>Fashion that fits your lifestyle.</p>
          </div>
          <nav className='footer__nav footer__nav-quick-links'>
            <span className='footer__quick-links'>Quick links</span>
            {mainPagesLinks.map(item => (
              <Link
                key={item.id}
                to={item.path}
                className='footer__internal-link'>
                {item.name}
              </Link>
            ))}
          </nav>
          <nav className='footer__nav'>
            <span className='footer__about'>About</span>
            {otherPageLinks.map(item => (
              <Link
                key={item.id}
                to={item.path}
                className='footer__internal-link'>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className='footer__bottom'>
          <div className='footer__social-links'>
            {socialLinks.map(item => {
              const Icon = item.iconName
              return (
                <a
                  key={item.id}
                  title={item.title}
                  href={item.href}
                  target='_blank'
                  rel='noreferrer'
                  className='footer__external-link'>
                  <Icon />
                </a>
              )
            })}
          </div>
          <span className='footer__copyright'>
            © 2023 Fashion Mode. Proudly powered by Fashion Mode
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
