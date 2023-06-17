import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Page} from '../../components'
import {featuredCategories} from '../../data'
import {getFeaturedCollection} from '../../redux/thunk'
import './Home.scss'
import {FeaturedCategories, FeaturedCollection, Hero} from './index'

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
    <Page>
      <Hero />
      <div className='home-wrapper'>
        <FeaturedCollection {...{featuredResult}} />
        <FeaturedCategories data={featuredCategories} />
      </div>
    </Page>
  )
}

export default Home
