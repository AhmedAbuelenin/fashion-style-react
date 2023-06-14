import {memo} from 'react'
import {Link} from 'react-router-dom'
import '../../../styles/_global.scss'
import './Hero.scss'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__heading-link-container'>
        <h2 className='hero__heading'>
          Find Your Fit <br /> Wide Range of Fashion
        </h2>
        <Link to='/shop' className='global-button'>
          SHOP NOW
        </Link>
      </div>
      <img
        src={require('../../../assets/images/hero-img.png')}
        alt='hero img'
        className='hero__img'
      />
    </div>
  )
}

export default memo(Hero)
