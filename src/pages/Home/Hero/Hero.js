import {Link} from 'react-router-dom'
import '../../../styles/_global.scss'
import './Hero.css'
import {memo} from 'react'

const Hero = () => {
  console.log('Hero is rendering')

  return (
    <div className='hero-wrapper'>
      <div className='hero-wrapper__content'>
        <h2 className='hero-wrapper__title'>
          Find Your Fit: <br /> Wide Range of Fashion
        </h2>
        <Link to='/shop' className='global-button'>
          SHOP NOW
        </Link>
      </div>
    </div>
  )
}

export default memo(Hero)
