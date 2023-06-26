import {ProductList} from '../../../components'
import '../../../styles/_global.scss'
import './SearchResultsList.scss'

const SearchResultsList = ({loading, data}) => {
  return (
    <ProductList
      loading={loading}
      data={data}
      emptyTitle='No products were found matching your selection.'
      emptyTitleClass='search-results__no-data'
    />
  )
}

export default SearchResultsList
