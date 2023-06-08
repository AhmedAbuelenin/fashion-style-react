import {useCallback, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {setCartTotals} from '../../redux/slices'
import './Header.css'
import {GlobalNav, GlobalSideBar, SearchAndCartBar} from './index'

const Header = () => {
  const dispatch = useDispatch()
  const {data, totals} = useSelector(state => state.cart)
  const [visibleSideBar, setVisibleSideBar] = useState(false)

  useEffect(() => {
    const calcCartTotals = products => {
      let qtySum = 0
      let priceSum = 0

      products.forEach(product => {
        qtySum += product.quantity
        priceSum += product.quantity * product.price
      })

      return {qty: qtySum, price: priceSum}
    }

    const getCartTotals = () => {
      dispatch(setCartTotals(calcCartTotals(data)))
    }

    getCartTotals()
  }, [data])

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
        Fashion Style
      </Link>
      <SearchAndCartBar
        {...{data, totals}}
        onMenuPress={toggleVisibleSideBar}
      />
    </div>
  )
}

export default Header
