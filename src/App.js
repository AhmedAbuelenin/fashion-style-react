import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Footer, Header} from './sections'
import {
  Home,
  Blog,
  Contact,
  Login,
  Cart,
  NoPage,
  Shop,
  ItemDetailsPage,
  Checkout
} from './pages'
import {ScrollToTopButton} from './components'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/itemDetailsPage/:id' element={<ItemDetailsPage />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </Router>
  )
}

export default App
