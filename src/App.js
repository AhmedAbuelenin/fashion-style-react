import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom'
import './App.css'
import {ScrollToTopButton} from './components'
import {
  Cart,
  Checkout,
  Contact,
  Home,
  ProductDetailsPage,
  Shop,
  ProductCategory,
  SearchResults
} from './pages'
import {Footer, Header} from './sections'

const App = () => {
  return (
    <Router basename='/fashion-style-react'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route
          path='/shop/product-category/:name'
          element={<ProductCategory />}
        />
        <Route path='/shop/search' element={<SearchResults />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route
          path='/productDetailsPage/:id'
          element={<ProductDetailsPage />}
        />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </Router>
  )
}

export default App
