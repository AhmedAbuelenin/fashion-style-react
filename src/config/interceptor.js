import axios from 'axios'
import {baseURL} from '../config/baseURL'

const Interceptor = axios.create({
  baseURL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json'
  }
})

Interceptor.interceptors.request.use(
  async config => {
    config.headers = {
      'X-RapidAPI-Key': 'dbf97e1f9bmshcffab7e1552813bp1c63c7jsn6eb8ca9ec3c6',
      'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
    }
    return config
  },
  error => {
    console.log('🚀 ~ Request error', error)
    return Promise.reject(error)
  }
)

Interceptor.interceptors.response.use(
  response => response,
  async error => {
    console.log('Interceptor error', JSON.stringify(error))
    console.log('Response error', JSON.stringify(error.response))
    const {message, response} = error
    const _status = response?.status
    if (!_status) {
      return Promise.reject({
        message: message.includes('timeout')
          ? message
          : message.includes('cancel')
          ? 'canceled'
          : 'network error'
      })
    }
    if (_status === 401 || _status === 403) {
      //   setTimeout(handleUserLogout, 300)
    }
    return Promise.reject({message: error.response.data.message})
  }
)

export default Interceptor
