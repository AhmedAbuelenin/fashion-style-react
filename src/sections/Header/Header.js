import {useCallback, useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import {removeCartItem} from '../../redux/slices'
import './Header.css'
import {GlobalNav, SearchAndCartBar} from './index'

const Header = () => {
  const dispatch = useDispatch()
  const {data} = useSelector(state => state.cart)
  const [totalSum, setTotalSum] = useState({qty: 0, price: 0})

  useEffect(() => {
    const calcTotalSum = () => {
      let qtySum = 0
      let priceSum = 0

      data.forEach(item => {
        qtySum += item.quantity
        priceSum += item.quantity * item.price.value
      })

      setTotalSum({qty: qtySum, price: priceSum})
    }

    calcTotalSum()
  }, [data])

  const handleItemRemove = useCallback(id => {
    dispatch(removeCartItem(id))
  }, [])

  return (
    <div className='global-header'>
      <GlobalNav />
      <Link to='/' className='logo-text'>
        Fashion Mode
      </Link>
      <SearchAndCartBar {...{data, totalSum}} onRemoveItem={handleItemRemove} />
    </div>
  )
}

export default Header
