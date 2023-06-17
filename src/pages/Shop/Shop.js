import {useEffect, useRef, useState} from 'react'
import {ContentWrapper, Loader, Page, ProductList} from '../../components'
import {getShopProducts} from '../../services'
import './../../styles/_global.scss'
import './Shop.scss'

const Shop = () => {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const errRef = useRef(null)

  useEffect(() => {
    const fetchShopProducts = async () => {
      try {
        setLoading(true)
        const _data = await getShopProducts()
        setData(_data.results)
      } catch (error) {
        errRef.current = error
        console.log('🚀 ~ fetchProductsByCategory ~ error:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchShopProducts()
  }, [])

  return (
    <Page title='Shop'>
      <ContentWrapper heading={'Shop'} headingClass='shop__heading'>
        {loading ? (
          <div className='centered-container'>
            <Loader />
          </div>
        ) : errRef.current ? (
          <span className='global-general-err-msg'>
            {errRef.current.message.toUpperCase()}
          </span>
        ) : (
          <ProductList {...{data}} />
        )}
      </ContentWrapper>
    </Page>
  )
}

export default Shop
