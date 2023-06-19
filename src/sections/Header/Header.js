import {useCallback, useState} from 'react'
import {Logo} from '../../components'
import './Header.scss'
import {GlobalNav, GlobalSideBar, SearchAndCartBar, SearchModal} from './index'

const Header = () => {
  const [isOpenedSideBar, setIsOpenedSideBar] = useState(false)
  const [visibleSearchModal, setVisibleSearchModal] = useState(false)

  const toggleOpenSideBar = useCallback(() => {
    setIsOpenedSideBar(status => !status)
  }, [])

  const toggleVisibleSearchModal = useCallback(() => {
    setVisibleSearchModal(status => !status)
  }, [])

  const stopClickPropagation = useCallback(event => {
    event.stopPropagation()
  }, [])

  return (
    <>
      <div className='global-header' onClick={stopClickPropagation}>
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
      <SearchModal
        isVisible={visibleSearchModal}
        onWindowClick={toggleVisibleSearchModal}
      />
    </>
  )
}

export default Header
