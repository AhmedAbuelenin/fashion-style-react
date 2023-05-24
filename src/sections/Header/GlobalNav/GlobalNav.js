import {memo} from 'react'
import {Link} from 'react-router-dom'
import {mainPagesData} from '../../../data'
import './GlobalNav.css'

const GlobalNav = ({visibleSideBar, onLinkPress}) => {
  console.log('GlobalNav is rendering')

  return (
    <nav className={`global-nav ${visibleSideBar ? 'global-nav--shown' : ''}`}>
      <ul className='global-nav__list'>
        {mainPagesData.map(page => (
          <li key={page.id} className='global-nav__item'>
            <Link
              to={page.path}
              className='global-nav__item-title'
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
