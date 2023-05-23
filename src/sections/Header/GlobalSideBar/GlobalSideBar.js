import './GlobalSideBar.css'
import {GlobalNav} from '../index'
import {VscChromeClose as CloseIcon} from 'react-icons/vsc'
import {memo} from 'react'

const GlobalSideBar = props => {
  console.log('GlobalSideBar is rendering')

  const {visibleSideBar, onSideBarClick, onWindowClick, onLinkPress} = props

  return (
    <div
      className={`${
        visibleSideBar ? 'global-sidebar' : 'global-sidebar--hidden'
      }`}
      onClick={onWindowClick}>
      <div className='global-sidebar__content' onClick={onSideBarClick}>
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
