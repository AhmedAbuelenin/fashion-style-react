import {Loader, ProductList} from '../../../components'
import './SearchResultsList.scss'
import '../../../styles/_global.scss'

const SearchResultsList = ({loading, data}) => {
  return loading ? (
    <div className='centered-container'>
      <Loader />
    </div>
  ) : data.length > 0 ? (
    <ProductList {...{data}} />
  ) : (
    <p className='search-results__no-data'>
      No products were found matching your selection.
    </p>
  )
}

export default SearchResultsList
