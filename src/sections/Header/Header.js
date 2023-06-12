import {useCallback, useState} from 'react'
import {Logo} from '../../components'
import './Header.css'
import {GlobalNav, GlobalSideBar, SearchAndCartBar} from './index'

const Header = () => {
  const [isOpenedSideBar, setIsOpenedSideBar] = useState(false)
  const [visibleSearchModal, setVisibleSearchModal] = useState(false)

  const toggleOpenSideBar = useCallback(() => {
    setIsOpenedSideBar(status => !status)
  }, [])

  const toggleVisibleSearchModal = useCallback(() => {
    setVisibleSearchModal(status => !status)
  }, [])

  return (
    <div className='global-header'>
      <GlobalNav {...{visibleSearchModal}} />
      <GlobalSideBar
        {...{isOpenedSideBar}}
        onLinkPress={toggleOpenSideBar}
        onWindowClick={toggleOpenSideBar}
      />
      <Logo wrapperClass='global-header__logo-wrapper' />
      <SearchAndCartBar
        {...{visibleSearchModal}}
        onMenuPress={toggleOpenSideBar}
        onToggleVisibleSearchModal={toggleVisibleSearchModal}
      />
    </div>
  )
}

export default Header
