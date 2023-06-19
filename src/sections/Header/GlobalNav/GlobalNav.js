import {memo} from 'react'
import {Link} from 'react-router-dom'
import {mainPagesData} from '../../../data'
import './GlobalNav.scss'

const GlobalNav = props => {
  const {isOpenedSideBar, visibleSearchModal, onLinkPress} = props

  const wrapperClass = isOpenedSideBar ? 'global-nav--shown' : ''
  const linkClass = !visibleSearchModal
    ? 'global-nav__item-title'
    : 'global-nav__item-title--disabled'

  const handleLinkClick = event => {
    if (visibleSearchModal) {
      event.preventDefault()
      return
    }
    if (onLinkPress) onLinkPress()
  }

  return (
    <nav className={`global-nav ${wrapperClass}`}>
      <ul className='global-nav__list'>
        {mainPagesData.map(page => (
          <li key={page.id} className='global-nav__item'>
            <Link
              to={page.path}
              className={`global-nav__item-link ${linkClass}`}
              onClick={handleLinkClick}>
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default memo(GlobalNav)
