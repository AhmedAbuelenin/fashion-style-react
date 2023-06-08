import {memo, useState} from 'react'
import {IoIosSearch as SearchIcon} from 'react-icons/io'
import {Link} from 'react-router-dom'
import './SearchModal.scss'

const SearchModal = ({isVisible}) => {
  console.log('SearchModal is rendering')

  const [keywords, setKeywords] = useState('')

  const wrapperClass = isVisible ? 'search-modal-wrapper--visible' : ''

  return (
    <div className={`search-modal-wrapper ${wrapperClass}`}>
      <div className='search-modal'>
        <input
          type='text'
          name='searchProduct'
          placeholder='Search products'
          value={keywords}
          onChange={event => setKeywords(event.target.value)}
          className='search-modal__input'
        />
        <Link to='#' className='global-button search-modal__search-link'>
          <SearchIcon title='Search for a product' size={28} />
        </Link>
      </div>
    </div>
  )
}

export default memo(SearchModal)
