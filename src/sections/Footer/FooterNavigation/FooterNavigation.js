import {Link} from 'react-router-dom'
import {mainPagesData, otherPagesData} from '../../../data'
import './FooterNavigation.scss'

const FooterNavigation = () => {
  return (
    <>
      <nav className='footer__nav footer__quick-links-container'>
        <span className='footer__quick-links'>Quick links</span>
        {mainPagesData.map(page => (
          <Link key={page.id} to={page.path} className='footer__page-link'>
            {page.name}
          </Link>
        ))}
      </nav>
      <nav className='footer__nav'>
        <span className='footer__about'>About</span>
        {otherPagesData.map(page => (
          <Link key={page.id} to={page.path} className='footer__page-link'>
            {page.name}
          </Link>
        ))}
      </nav>
    </>
  )
}

export default FooterNavigation
