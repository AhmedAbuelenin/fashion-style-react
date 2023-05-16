import './ScrollToTopButton.css'
import {MdKeyboardArrowUp as ArrowIcon} from 'react-icons/md'
import {useCallback, useEffect, useState} from 'react'

const ScrollToTopButton = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [showButton, setShowButton] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset

      if (currentPosition < scrollPosition && currentPosition < 300) {
        setShowButton(false)
      } else {
        setShowButton(true)
      }

      setScrollPosition(currentPosition)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollPosition])

  const handleClick = useCallback(() => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }, [])

  return showButton ? (
    <button className='scroll-to-top-btn' onClick={handleClick}>
      <ArrowIcon color='#ffffff' size={22} />
    </button>
  ) : null
}

export default ScrollToTopButton
