import {useCallback, useState} from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import {GlobalNav, GlobalSideBar, SearchAndCartBar} from './index'

const Header = () => {
  const [visibleSideBar, setVisibleSideBar] = useState(false)
  const [visibleSearchModal, setVisibleSearchModal] = useState(false)

  const toggleVisibleSideBar = useCallback(() => {
    setVisibleSideBar(visible => !visible)
  }, [])

  const toggleVisibleSearchModal = useCallback(() => {
    setVisibleSearchModal(status => !status)
  }, [])

  return (
    <div className='global-header'>
      <GlobalNav {...{visibleSearchModal}} />
      <GlobalSideBar
        {...{visibleSideBar}}
        onLinkPress={toggleVisibleSideBar}
        onWindowClick={toggleVisibleSideBar}
      />
      <Link to='/' className='logo-text'>
        Fashion Style
      </Link>
      <SearchAndCartBar
        {...{visibleSearchModal}}
        onMenuPress={toggleVisibleSideBar}
        onToggleVisibleSearchModal={toggleVisibleSearchModal}
      />
    </div>
  )
}

export default Header
