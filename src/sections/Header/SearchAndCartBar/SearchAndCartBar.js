import {memo, useEffect} from 'react'
import {BsCart2} from 'react-icons/bs'
import {IoIosSearch as SearchIcon} from 'react-icons/io'
import {RxHamburgerMenu as BurgerIcon} from 'react-icons/rx'
import {VscChromeClose as CloseIcon} from 'react-icons/vsc'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useLocation} from 'react-router-dom'
import {CartModal, SearchModal} from '../index'
import './SearchAndCartBar.css'
import {setCartTotals} from '../../../redux/slices'

const SearchAndCartBar = props => {
  console.log('SearchAndCartBar is rendering')

  const {visibleSearchModal, onToggleVisibleSearchModal} = props

  const dispatch = useDispatch()
  const {data, totals} = useSelector(state => state.cart)
  const {pathname} = useLocation()
  const isCartOrCheckoutPath = RegExp(/cart|checkout/).test(pathname)

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

  return (
    <>
      <div className='global-header__icons'>
        {!visibleSearchModal ? (
          <SearchIcon
            title='Search for a product'
            size={28}
            onClick={onToggleVisibleSearchModal}
            className='global-header__icon global-header__search'
          />
        ) : (
          <CloseIcon size={24} onClick={onToggleVisibleSearchModal} />
        )}
        <BurgerIcon
          color='#212121'
          size={30}
          onClick={props.onMenuPress}
          className='global-header__menu'
        />
        <Link
          title='View your shopping cart'
          to='/cart'
          className={`global-header__icon global-header__cart`}>
          <BsCart2 size={24} />
          <span className='global-header__cart-count'>{totals.qty}</span>
        </Link>

        {!isCartOrCheckoutPath ? (
          <CartModal {...{data}} subtotal={totals.price} />
        ) : null}
      </div>
      <SearchModal
        isVisible={visibleSearchModal}
        onWindowClick={onToggleVisibleSearchModal}
      />
    </>
  )
}

export default memo(SearchAndCartBar)
