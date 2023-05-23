import {AiOutlineUser} from 'react-icons/ai'
import {BsCart2} from 'react-icons/bs'
import {IoIosSearch} from 'react-icons/io'
import {Link, useLocation} from 'react-router-dom'
import './SearchAndCartBar.css'
import {CartModal} from '../index'

const SearchAndCartBar = props => {
  console.log('SearchAndCartBar is rendering')

  const {data, totalSum, onRemoveItem} = props

  const {pathname} = useLocation()

  return (
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
        className={`global-header__icon global-header__cart`}>
        <BsCart2 size={24} />
        <span className='global-header__cart-count'>{totalSum.qty}</span>
      </Link>

      {pathname !== '/cart' ? (
        <CartModal
          data={data}
          subtotal={totalSum.price}
          onRemoveItem={onRemoveItem}
        />
      ) : null}
    </div>
  )
}

export default SearchAndCartBar
