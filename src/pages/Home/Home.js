import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getFeaturedCollection} from '../../redux/thunk'
import './Home.css'
import {FeaturedCollection, Hero} from './index'

const Home = () => {
  console.log('Home page is rendered')

  const dispatch = useDispatch()
  const featuredResult = useSelector(state => state.featuredCollection)

  useEffect(() => {
    const fetchProducts = () => {
      dispatch(getFeaturedCollection())
    }

    if (featuredResult.data.length === 0) {
      fetchProducts()
    }
  }, [])

  return (
    <>
      <Hero />
      <div className='content-wrapper'>
        <FeaturedCollection {...{featuredResult}} />
      </div>
    </>
  )
}

export default Home
