import {useEffect, useRef, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Loader, ProductDetails} from '../../components'
import {getProduct} from '../../services'
import '../../styles/_global.scss'
import './ProductDetailsPage.scss'

const ProductDetailsPage = () => {
  console.log('ProductDetailsPage is rendered')

  const {id} = useParams()

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const errRef = useRef(null)

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true)
        const _data = await getProduct(id)
        setData(_data.product)
      } catch (error) {
        errRef.current = error
        console.log('🚀 ~ fetchDetails ~ error:', error)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchDetails()
    }
  }, [id])

  return (
    <div className='product-details-page'>
      {data ? (
        <ProductDetails item={data} />
      ) : loading ? (
        <div className='centered-container'>
          <Loader />
        </div>
      ) : errRef.current ? (
        <div className='centered-container'>
          <span className='global-general-err-msg'>
            {errRef.current.message.toUpperCase()}
          </span>
        </div>
      ) : null}
    </div>
  )
}

export default ProductDetailsPage
