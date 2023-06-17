import {Page} from '../../components'
import './Home.scss'
import {FeaturedCategories, FeaturedCollection, Hero} from './index'

const Home = () => {
  return (
    <Page>
      <Hero />
      <div className='home-wrapper'>
        <FeaturedCollection />
        <FeaturedCategories />
      </div>
    </Page>
  )
}

export default Home
