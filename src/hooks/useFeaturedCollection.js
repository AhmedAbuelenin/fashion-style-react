import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getFeaturedCollection} from '../redux/thunk'

export const useFeaturedCollection = () => {
  const dispatch = useDispatch()
  const featuredResult = useSelector(state => state.featuredCollection)

  useEffect(() => {
    const fetchProducts = () => {
      dispatch(getFeaturedCollection())
    }

    if (featuredResult.data.length === 0) {
      fetchProducts()
    }
  })

  return featuredResult
}
