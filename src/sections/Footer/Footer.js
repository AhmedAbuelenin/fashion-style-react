import './Footer.css'
import {mainPagesData, otherPagesData, socialsData} from '../../data'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer__content'>
        <div className='footer__top'>
          <div className='footer__logo-container'>
            <span>Fashion Style</span>
            <p className='footer__slogan'>Fashion that fits your lifestyle.</p>
          </div>
          <nav className='footer__nav footer__nav-quick-links'>
            <span className='footer__quick-links'>Quick links</span>
            {mainPagesData.map(page => (
              <Link
                key={page.id}
                to={page.path}
                className='footer__internal-link'>
                {page.name}
              </Link>
            ))}
          </nav>
          <nav className='footer__nav'>
            <span className='footer__about'>About</span>
            {otherPagesData.map(page => (
              <Link
                key={page.id}
                to={page.path}
                className='footer__internal-link'>
                {page.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className='footer__bottom'>
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
          <span className='footer__copyright'>
            © 2023 Fashion Style. Proudly powered by Fashion Style
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
