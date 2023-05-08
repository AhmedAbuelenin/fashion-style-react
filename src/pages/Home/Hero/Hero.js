import './Hero.css'
import '../../../styles/_global.scss'
import {Link} from 'react-router-dom'

const Hero = () => {
  return (
    <div className='hero-wrapper'>
      <div className='hero-wrapper__content'>
        <h2 className='hero-wrapper__title'>
          Find Your Fit: <br /> Wide Range of Fashion
        </h2>
        <Link to='/foodList' className='global-button'>
          SHOP NOW
        </Link>
      </div>
    </div>
  )
}

export default Hero
