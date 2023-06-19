import {memo, useEffect} from 'react'
import {BsCart2} from 'react-icons/bs'
import {IoIosSearch as SearchIcon} from 'react-icons/io'
import {RxHamburgerMenu as BurgerIcon} from 'react-icons/rx'
import {VscChromeClose as CloseIcon} from 'react-icons/vsc'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useLocation} from 'react-router-dom'
import {CartModal, SearchModal} from '../index'
import './SearchAndCartBar.scss'
import {setCartTotals} from '../../../redux/slices'

const SearchAndCartBar = props => {
  const {visibleSearchModal, onToggleVisibleSearchModal} = props

  const dispatch = useDispatch()
  const {data, totals} = useSelector(state => state.cart)
  const {pathname} = useLocation()
  const isCartOrCheckoutPath = RegExp(/cart|checkout/).test(pathname)
  const iconClass = visibleSearchModal ? 'global-header__icon--disabled' : ''

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
        <div className='global-header__search-cart-container'>
          {!visibleSearchModal ? (
            <SearchIcon
              title='Search for a product'
              size={28}
              onClick={onToggleVisibleSearchModal}
              className={`global-header__icon ${iconClass} global-header__search`}
            />
          ) : (
            <CloseIcon
              title='Close the search'
              size={24}
              onClick={onToggleVisibleSearchModal}
              className='global-header__icon'
            />
          )}
          <Link
            title='View your shopping cart'
            to={!visibleSearchModal ? '/cart' : '#'}
            className={`global-header__icon ${iconClass} global-header__cart`}>
            <BsCart2 size={24} />
            <span className='global-header__cart-count'>{totals.qty}</span>
          </Link>
          {!isCartOrCheckoutPath && !visibleSearchModal ? (
            <CartModal {...{data}} subtotal={totals.price} />
          ) : null}
        </div>
        <BurgerIcon
          color='#212121'
          size={30}
          onClick={!visibleSearchModal ? props.onMenuPress : undefined}
          className={`global-header__icon ${iconClass} global-header__menu`}
        />
      </div>
      <SearchModal
        isVisible={visibleSearchModal}
        onWindowClick={onToggleVisibleSearchModal}
      />
    </>
  )
}

export default memo(SearchAndCartBar)
