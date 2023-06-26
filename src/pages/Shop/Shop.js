import {ContentWrapper, Page, ProductList} from '../../components'
import {useShopProducts} from '../../hooks'
import './../../styles/_global.scss'
import './Shop.scss'

const Shop = () => {
  const {loading, data, error} = useShopProducts()

  return (
    <Page title='Shop'>
      <ContentWrapper heading={'Shop'} headingClass='shop__heading'>
        {!error ? (
          <ProductList loading={loading} data={data} />
        ) : (
          <span className='global-general-err-msg'>
            {error.message.toUpperCase()}
          </span>
        )}
      </ContentWrapper>
    </Page>
  )
}

export default Shop
