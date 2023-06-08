import {memo, useCallback} from 'react'
import {BsCart2} from 'react-icons/bs'
import {IoIosSearch} from 'react-icons/io'
import {RxHamburgerMenu as BurgerIcon} from 'react-icons/rx'
import {useDispatch} from 'react-redux'
import {Link, useLocation} from 'react-router-dom'
import {removeCartItem} from '../../../redux/slices'
import {CartModal} from '../index'
import './SearchAndCartBar.css'

const SearchAndCartBar = props => {
  console.log('SearchAndCartBar is rendering')

  const {data, totals, onMenuPress} = props

  const dispatch = useDispatch()
  const {pathname} = useLocation()
  const isCartOrCheckoutPath = RegExp(/cart|checkout/).test(pathname)

  const handleItemRemove = useCallback(id => {
    dispatch(removeCartItem(id))
  }, [])

  return (
    <div className='global-header__icons'>
      <IoIosSearch
        title='Search for a product'
        size={28}
        className='global-header__icon global-header__search'
      />
      <BurgerIcon
        color='#212121'
        size={30}
        onClick={onMenuPress}
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
        <CartModal
          {...{data}}
          onRemoveItem={handleItemRemove}
          subtotal={totals.price}
        />
      ) : null}
    </div>
  )
}

export default memo(SearchAndCartBar)
