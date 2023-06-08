import {memo, useCallback} from 'react'
import {useForm} from 'react-hook-form'
import {GrFormClose as CloseIcon} from 'react-icons/gr'
import {IoIosSearch as SearchIcon} from 'react-icons/io'
import './SearchModal.scss'

const SearchModal = ({isVisible, onWindowClick}) => {
  console.log('SearchModal is rendering')

  const {register, setValue, watch, handleSubmit} = useForm({
    defaultValues: {keyword: ''}
  })

  const wrapperClass = isVisible ? 'search-modal-wrapper--visible' : ''

  const resetInput = useCallback(() => {
    setValue('keyword', '')
  }, [])

  const stopClickPropagateToChild = useCallback(event => {
    event.stopPropagation()
  }, [])

  const handleSearch = useCallback(data => {
    window.location.href = `shop/search?q=${encodeURIComponent(data.keyword)}`
  }, [])

  return (
    <div
      className={`search-modal-wrapper ${wrapperClass}`}
      onClick={onWindowClick}>
      <div className='search-modal' onClick={stopClickPropagateToChild}>
        <form
          noValidate
          onSubmit={handleSubmit(handleSearch)}
          className='search-modal__form'>
          <div className='search-modal__input-container'>
            <input
              {...register('keyword', {required: true})}
              name='keyword'
              placeholder='Search products'
              className='search-modal__input'
            />
            {watch('keyword').length > 0 ? (
              <CloseIcon
                color='black'
                size='24'
                onClick={resetInput}
                className='search-modal__delete-icon'
              />
            ) : null}
          </div>
          <button
            type='submit'
            className='global-button search-modal__search-link'>
            <SearchIcon title='Search for a product' size={28} />
          </button>
        </form>
      </div>
    </div>
  )
}

export default memo(SearchModal)
