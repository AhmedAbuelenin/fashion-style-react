import axios from 'axios'
import {baseURL} from '../../config/baseURL'

const options = {
  params: {
    country: 'us',
    lang: 'en',
    currentpage: '0',
    pagesize: '30',
    categories: 'men_all',
    concepts: 'H&M MAN'
  },
  headers: {
    'X-RapidAPI-Key': 'f8b173667emsh0a9a958f9d481cbp119cd5jsnc4d066b36f7a',
    'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
  }
}

export const getProducts = async () => {
  try {
    const res = await axios.get(`${baseURL}/products/list`, {
      headers: {
        'X-RapidAPI-Key': 'f8b173667emsh0a9a958f9d481cbp119cd5jsnc4d066b36f7a',
        'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
      }
    })
    return res.data
  } catch (error) {
    throw error
  }
}
