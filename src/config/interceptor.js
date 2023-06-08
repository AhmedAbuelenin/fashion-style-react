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
      'X-RapidAPI-Key': 'f270594031msh8826d47f868c248p1f26d3jsn4587487e3b3d',
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
