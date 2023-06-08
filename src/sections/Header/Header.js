import {useCallback, useState} from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import {GlobalNav, GlobalSideBar, SearchAndCartBar} from './index'

const Header = () => {
  const [visibleSideBar, setVisibleSideBar] = useState(false)

  const toggleVisibleSideBar = useCallback(() => {
    setVisibleSideBar(visible => !visible)
  }, [])

  return (
    <div className='global-header'>
      <GlobalNav />
      <GlobalSideBar
        {...{visibleSideBar}}
        onLinkPress={toggleVisibleSideBar}
        onWindowClick={toggleVisibleSideBar}
      />
      <Link to='/' className='logo-text'>
        Fashion Style
      </Link>
      <SearchAndCartBar onMenuPress={toggleVisibleSideBar} />
    </div>
  )
}

export default Header
