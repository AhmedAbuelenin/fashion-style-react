import {memo, useCallback, useEffect, useState} from 'react'
import {VscChromeClose as CloseIcon} from 'react-icons/vsc'
import {GlobalNav} from '../index'
import './GlobalSideBar.scss'

const GlobalSideBar = props => {
  const {isOpenedSideBar, onWindowClick, onLinkPress} = props

  const [isVisible, setIsVisible] = useState(true)

  const wrapperClass = isOpenedSideBar ? 'global-sidebar--opened' : ''
  const contentClass = isVisible
    ? 'global-sidebar__content--visible'
    : 'global-sidebar__content--hidden'

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleResize = () => {
    if (window.innerWidth <= 1000) {
      setIsVisible(true)
      return
    }
    setIsVisible(false)
  }

  const stopClicksFromChildren = useCallback(event => {
    event.stopPropagation()
  }, [])

  return (
    <div className={`global-sidebar ${wrapperClass}`} onClick={onWindowClick}>
      <div
        className={`global-sidebar__content ${contentClass}`}
        onClick={stopClicksFromChildren}>
        <div className='global-sidebar__close-container'>
          <CloseIcon
            size={24}
            className='global-sidebar__close'
            onClick={onWindowClick}
          />
        </div>
        <GlobalNav {...{isOpenedSideBar, onLinkPress}} />
      </div>
    </div>
  )
}

export default memo(GlobalSideBar)
