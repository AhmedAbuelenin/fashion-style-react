import axios from 'axios'
import {universalApiBaseUrl} from '../../config/universalApiBaseUrl'

export const getCountries = async authToken => {
  try {
    const res = await axios.get(`${universalApiBaseUrl}/countries`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
        Accept: 'application/json'
      }
    })
    return res.data
  } catch (error) {
    throw error.response
  }
}
