import {memo} from 'react'
import {Link} from 'react-router-dom'
import {mainPagesData} from '../../../data'
import './GlobalNav.scss'

const GlobalNav = props => {
  console.log('GlobalNav is rendering')

  const {visibleSideBar, visibleSearchModal, onLinkPress} = props

  const wrapperClass = visibleSideBar ? 'global-nav--shown' : ''
  const linkClass = !visibleSearchModal
    ? 'global-nav__item-title'
    : 'global-nav__item-title--disabled'

  return (
    <nav className={`global-nav ${wrapperClass}`}>
      <ul className='global-nav__list'>
        {mainPagesData.map(page => (
          <li key={page.id} className='global-nav__item'>
            <Link
              to={visibleSearchModal ? '#' : page.path}
              className={`global-nav__item-link ${linkClass}`}
              onClick={onLinkPress}>
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default memo(GlobalNav)
