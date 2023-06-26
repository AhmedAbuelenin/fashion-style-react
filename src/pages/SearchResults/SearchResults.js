import {useLocation} from 'react-router-dom'
import {ContentWrapper, Page} from '../../components'
import {useSearchResults} from '../../hooks'
import './SearchResults.scss'
import SearchResultsList from './SearchResultsList/SearchResultsList'

const SearchResults = () => {
  const {search} = useLocation()
  const keyword = new URLSearchParams(search).get('q')

  const {matchedProducts, loading, error} = useSearchResults(keyword)

  return (
    <Page title={`Search Results for “${keyword}”`}>
      <ContentWrapper
        heading={`Search results: “${keyword}”`}
        headingClass='search-results__heading'
        wrapperClass='search-results'>
        {!error ? (
          <SearchResultsList loading={loading} data={matchedProducts} />
        ) : (
          <span className='global-general-err-msg'>
            {error.message.toUpperCase()}
          </span>
        )}
      </ContentWrapper>
    </Page>
  )
}

export default SearchResults
