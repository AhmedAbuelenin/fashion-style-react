import axios from 'axios'
import {universalApiBaseUrl} from '../../config/universalApiBaseUrl'

export const getCountries = async authToken => {
  try {
    const res = await axios.get(`${universalApiBaseUrl}/countries`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    })
    return res.data
  } catch (error) {
    console.log('🚀 ~ file: countries.js:15 ~ getCountries ~ error:', error)
    throw error.response
  }
}
