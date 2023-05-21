import {useCallback, useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {Loader, ItemDetails} from '../../components'
import {getProduct} from '../../services'
import '../../styles/_global.scss'
import './ItemDetailsPage.css'

const ItemDetailsPage = () => {
  console.log('ItemDetailsPage is rendered')

  const {id} = useParams()

  const [data, setData] = useState(null)
  const [qty, setQty] = useState('1')
  const [loading, setLoading] = useState(false)

  const item = {
    name: data?.name,
    description: data?.description,
    price: data?.whitePrice.price,
    image: data?.articlesList[0].galleryDetails[0].baseUrl,
    categoryName: data?.customerGroup
  }

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true)
        const _data = await getProduct(id)
        setData(_data.product)
      } catch (error) {
        console.log('🚀 ~ fetchDetails ~ error:', error)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchDetails()
    }
  }, [id])

  const handleQtyChange = useCallback(event => {
    const maxInputLength = 3
    if (event.target.value.length <= maxInputLength) {
      setQty(event.target.value)
    }
  }, [])

  const handleIncrement = useCallback(() => {
    const maxQty = 999
    if (qty < maxQty) {
      setQty(value => Number(value) + 1)
    }
  }, [qty])

  const handleDecrement = useCallback(() => {
    setQty(value => Number(value) - 1 || 1)
  }, [])

  if (data) {
    return (
      <div className='item-details-page'>
        <ItemDetails
          item={item}
          qty={qty}
          onTextChange={handleQtyChange}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </div>
    )
  }

  return (
    <div className='centered-container full-height'>
      <Loader />
    </div>
  )

  // if (!loading && !data) {
  //   return (
  //     <div className='error-wrapper full-height'>
  //       <h2 className='error-wrapper__msg'>Error occurred</h2>
  //       <button className='error-wrapper__button'>Try again</button>
  //     </div>
  //   )
  // }
}

export default ItemDetailsPage
