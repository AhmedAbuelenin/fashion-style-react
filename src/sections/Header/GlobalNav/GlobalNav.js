import {Link} from 'react-router-dom'
import {mainPagesData} from '../../../data'
import './GlobalNav.css'
import {memo} from 'react'

const GlobalNav = () => {
  console.log('GlobalNav is rendering')

  return (
    <nav className='global-nav'>
      <ul className='global-nav__list'>
        {mainPagesData.map(page => (
          <li key={page.id} className='global-nav__item'>
            <Link to={page.path} className='global-nav__item-title'>
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default memo(GlobalNav)
