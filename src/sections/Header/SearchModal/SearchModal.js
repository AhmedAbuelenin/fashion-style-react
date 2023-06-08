import {memo, useCallback, useState} from 'react'
import {IoIosSearch as SearchIcon} from 'react-icons/io'
import {Link} from 'react-router-dom'
import './SearchModal.scss'
import {GrFormClose as CloseIcon} from 'react-icons/gr'

const SearchModal = ({isVisible}) => {
  console.log('SearchModal is rendering')

  const [keywords, setKeywords] = useState('')

  const wrapperClass = isVisible ? 'search-modal-wrapper--visible' : ''

  const resetInput = useCallback(() => {
    setKeywords('')
  }, [])

  return (
    <div className={`search-modal-wrapper ${wrapperClass}`}>
      <div className='search-modal'>
        <div className='search-modal__input-container'>
          <input
            type='text'
            name='searchProduct'
            placeholder='Search products'
            value={keywords}
            onChange={event => setKeywords(event.target.value)}
            className='search-modal__input'
          />
          {keywords.length > 0 ? (
            <CloseIcon
              color='black'
              size='24'
              onClick={resetInput}
              className='search-modal__delete-icon'
            />
          ) : null}
        </div>
        <Link to='#' className='global-button search-modal__search-link'>
          <SearchIcon title='Search for a product' size={28} />
        </Link>
      </div>
    </div>
  )
}

export default memo(SearchModal)
