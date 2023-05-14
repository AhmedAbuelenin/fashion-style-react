import './Header.css'
import {IoIosSearch} from 'react-icons/io'
import {AiOutlineUser} from 'react-icons/ai'
import {BsCart2} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import {mainPagesData} from '../../data'

const Header = () => {
  return (
    <div className='global-header'>
      <nav className='global-nav'>
        <ul className='global-nav__list'>
          {mainPagesData.map(page => (
            <li key={page.id} className='global-nav__item'>
              <Link to={page.path}>{page.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link to='/' className='logo-text'>
        Fashion Mode
      </Link>
      <div className='global-icons'>
        <IoIosSearch size={24} />
        <Link to='/login' className='global-icons__icon'>
          <AiOutlineUser size={24} />
        </Link>
        <Link to='/cart' className='global-icons__icon'>
          <BsCart2 size={24} />
        </Link>
      </div>
    </div>
  )
}

export default Header
