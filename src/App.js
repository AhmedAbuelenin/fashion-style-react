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
  FoodList,
  ItemDetails
} from './pages'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/foodList' element={<FoodList />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/itemDetails' element={<ItemDetails />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
