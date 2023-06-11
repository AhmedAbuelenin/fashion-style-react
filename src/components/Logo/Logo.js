import {Link} from 'react-router-dom'
import './Logo.scss'

const Logo = ({wrapperClass}) => {
  return (
    <Link to='/' className={`logo-wrapper ${wrapperClass}`}>
      <span className='logo-wrapper__text'>FASHION</span>
      STYLE
    </Link>
  )
}

export default Logo
