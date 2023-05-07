import './Header.css'
import {IoIosSearch} from 'react-icons/io'
import {AiOutlineUser} from 'react-icons/ai'
import {BsCart2} from 'react-icons/bs'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='global-header'>
      <nav className='global-nav'>
        <ul className='global-nav__items'>
          <li className='global-nav__item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='global-nav__item'>
            <Link to='/blog'>Blog</Link>
          </li>
          <li className='global-nav__item'>
            <Link to='/foodList'>Menu</Link>
          </li>
          <li className='global-nav__item'>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
      <Link to='/#' className='logo-img'>
        <img
          src='https://demo.athemes.com/botiga/wp-content/uploads/sites/125/2021/07/BOTIGA.svg'
          alt='logo img'
        />
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
