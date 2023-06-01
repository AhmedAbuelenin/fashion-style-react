import axios from 'axios'
import {universalApiBaseUrl} from '../../config/universalApiBaseUrl'

export const getCountryStates = async (authToken, country) => {
  try {
    const res = await axios.get(`${universalApiBaseUrl}/states/${country}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        Accept: 'application/json'
      }
    })
    return res.data
  } catch (error) {
    console.log('🚀 ~ file: states.js:17 ~ getCountryStates ~ error:', error)
    throw error.response
  }
}
