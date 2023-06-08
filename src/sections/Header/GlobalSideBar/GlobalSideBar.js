import {memo} from 'react'
import {VscChromeClose as CloseIcon} from 'react-icons/vsc'
import {GlobalNav} from '../index'
import './GlobalSideBar.css'

const GlobalSideBar = props => {
  console.log('GlobalSideBar is rendering')

  const {visibleSideBar, onWindowClick, onLinkPress} = props

  const stopClicksFromChildren = event => {
    event.stopPropagation()
  }

  return (
    <div
      className={`${
        visibleSideBar ? 'global-sidebar' : 'global-sidebar--hidden'
      }`}
      onClick={onWindowClick}>
      <div className='global-sidebar__content' onClick={stopClicksFromChildren}>
        <div className='global-sidebar__close-container'>
          <CloseIcon
            size={24}
            className='global-sidebar__close'
            onClick={onWindowClick}
          />
        </div>
        <GlobalNav {...{visibleSideBar, onLinkPress}} />
      </div>
    </div>
  )
}

export default memo(GlobalSideBar)
