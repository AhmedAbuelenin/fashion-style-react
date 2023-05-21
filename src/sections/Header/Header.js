import {useCallback, useEffect, useState} from 'react'
import {AiOutlineUser} from 'react-icons/ai'
import {BsCart2} from 'react-icons/bs'
import {IoIosSearch} from 'react-icons/io'
import {useDispatch, useSelector} from 'react-redux'
import {Link, useLocation} from 'react-router-dom'
import {mainPagesData} from '../../data'
import {removeCartItem} from '../../redux/slices'
import CartModal from './CartModal/CartModal'
import './Header.css'

const Header = () => {
  const dispatch = useDispatch()
  const {data} = useSelector(state => state.cart)
  const {pathname} = useLocation()
  const [totalSum, setTotalSum] = useState({qty: 0, price: 0})

  useEffect(() => {
    calcTotalSum()
  }, [data])

  const calcTotalSum = useCallback(() => {
    let qtySum = 0
    let priceSum = 0

    data.forEach(({quantity, price}) => {
      qtySum += quantity
      priceSum += quantity * price.value
    })

    setTotalSum({qty: qtySum, price: priceSum})
  }, [data])

  const handleItemRemove = useCallback(id => {
    dispatch(removeCartItem(id))
  }, [])

  return (
    <div className='global-header'>
      <nav className='global-nav'>
        <ul className='global-nav__list'>
          {mainPagesData.map(page => (
            <li key={page.id} className='global-nav__item'>
              <Link to={page.path} className='global-nav__item-title'>
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Link to='/' className='logo-text'>
        Fashion Mode
      </Link>
      <div className='global-header__icons'>
        <IoIosSearch
          title='Search for a product'
          size={24}
          className='global-header__icon global-header__search'
        />
        <Link title='Your account' to='/login' className='global-header__icon'>
          <AiOutlineUser size={24} />
        </Link>
        <Link
          title='View your shopping cart'
          to='/cart'
          className='global-header__icon global-header__cart'>
          <BsCart2 size={24} />
          <span className='global-header__cart-count'>{totalSum.qty}</span>
        </Link>

        {pathname !== '/cart' ? (
          <CartModal
            data={data}
            subtotal={totalSum.price}
            onRemoveItem={handleItemRemove}
          />
        ) : null}
      </div>
    </div>
  )
}

export default Header
