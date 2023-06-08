import {memo, useCallback, useState} from 'react'
import {GrFormClose as CloseIcon} from 'react-icons/gr'
import {IoIosSearch as SearchIcon} from 'react-icons/io'
import {Link} from 'react-router-dom'
import './SearchModal.scss'

const SearchModal = ({isVisible, onWindowClick}) => {
  console.log('SearchModal is rendering')

  const [keywords, setKeywords] = useState('')

  const wrapperClass = isVisible ? 'search-modal-wrapper--visible' : ''

  const handleKeywordsChange = useCallback(event => {
    setKeywords(event.target.value)
  }, [])

  const resetInput = useCallback(() => {
    setKeywords('')
  }, [])

  const stopClickPropagateToChild = useCallback(event => {
    event.stopPropagation()
  }, [])

  return (
    <div
      className={`search-modal-wrapper ${wrapperClass}`}
      onClick={onWindowClick}>
      <div
        className='search-modal-wrapper__main'
        onClick={stopClickPropagateToChild}>
        <div className='search-modal'>
          <div className='search-modal__input-container'>
            <input
              type='text'
              name='searchProduct'
              placeholder='Search products'
              value={keywords}
              onChange={handleKeywordsChange}
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
    </div>
  )
}

export default memo(SearchModal)