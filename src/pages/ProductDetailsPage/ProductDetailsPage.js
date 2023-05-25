import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Loader, ProductDetails} from '../../components'
import {getProduct} from '../../services'
import '../../styles/_global.scss'
import './ProductDetailsPage.css'

const ProductDetailsPage = () => {
  console.log('ProductDetailsPage is rendered')

  const {id} = useParams()

  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const _data = await getProduct(id)
        setData(_data.product)
      } catch (error) {
        console.log('🚀 ~ fetchDetails ~ error:', error)
      }
    }

    if (id) {
      fetchDetails()
    }
  }, [id])

  return data ? (
    <div className='item-details-page'>
      <ProductDetails item={data} />
    </div>
  ) : (
    <div className='centered-container full-height'>
      <Loader />
    </div>
  )
}

export default ProductDetailsPage
