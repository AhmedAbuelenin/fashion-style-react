import {useCallback, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {removeCartItem} from '../../redux/slices'
import './Header.css'
import {GlobalNav, GlobalSideBar, SearchAndCartBar} from './index'
import {calcCartTotals} from '../../utils'

const Header = () => {
  const dispatch = useDispatch()
  const {data} = useSelector(state => state.cart)
  const [totals, setTotals] = useState({qty: 0, price: 0})
  const [visibleSideBar, setVisibleSideBar] = useState(false)

  useEffect(() => {
    const getCartTotals = () => {
      setTotals(calcCartTotals(data))
    }

    getCartTotals()
  }, [data])

  const handleItemRemove = useCallback(id => {
    dispatch(removeCartItem(id))
  }, [])

  const toggleVisibleSideBar = useCallback(() => {
    setVisibleSideBar(visible => !visible)
  }, [])

  const stopClicksFromChildren = useCallback(event => {
    event.stopPropagation()
  }, [])

  return (
    <div className='global-header'>
      <GlobalNav />
      <GlobalSideBar
        {...{visibleSideBar}}
        onSideBarClick={stopClicksFromChildren}
        onLinkPress={toggleVisibleSideBar}
        onWindowClick={toggleVisibleSideBar}
      />
      <Link to='/' className='logo-text'>
        Fashion Mode
      </Link>
      <SearchAndCartBar
        {...{data, totals}}
        onRemoveItem={handleItemRemove}
        onMenuPress={toggleVisibleSideBar}
      />
    </div>
  )
}

export default Header
