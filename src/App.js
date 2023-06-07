import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import './App.css'
import {ScrollToTopButton} from './components'
import {
  Cart,
  Checkout,
  Contact,
  Home,
  NoPage,
  ProductDetailsPage,
  Shop,
  ProductCategory
} from './pages'
import {Footer, Header} from './sections'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/product-category/:name' element={<ProductCategory />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route
          path='/productDetailsPage/:id'
          element={<ProductDetailsPage />}
        />
        <Route path='*' element={<NoPage />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </Router>
  )
}

export default App
