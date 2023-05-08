import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Footer, Header} from './sections'
import {Home, Blog, Contact, Login, Cart, NoPage, FoodList} from './pages'
import axios from 'axios'
import {useEffect} from 'react'

const App = () => {
  useEffect(() => {
    fetchProducts()
  }, [])

  const options = {
    method: 'GET',
    url: 'https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/categories/list',
    params: {
      lang: 'en',
      country: 'us'
    },
    headers: {
      'X-RapidAPI-Key': 'f8b173667emsh0a9a958f9d481cbp119cd5jsnc4d066b36f7a',
      'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
    }
  }

  const fetchProducts = async () => {
    try {
      const response = await axios.request(options)
      console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }

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
        <Route path='*' element={<NoPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
