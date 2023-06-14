import axios from 'axios'
import {universalApiBaseUrl} from '../../config/universalApiBaseUrl'

export const getUniversalApiAuthToken = async () => {
  try {
    const res = await axios.get(`${universalApiBaseUrl}/getaccesstoken`, {
      headers: {
        'api-token':
          'C-KJoG09be8tfhqYuO6ce3CkLc-vGRLoXHGgYyH-odu2jyWm7eNUTgjvemt3KAsrJ5U',
        Accept: 'application/json',
        'user-email': 'eng.ahmedabdelmonem05@gmail.com',
        'Access-Control-Allow-Origin': '*'
      }
    })
    return res.data
  } catch (error) {
    console.log(
      '🚀 ~ file: universalApiAuthToken.js:16 ~ getUniversalApiAuthToken ~ error:',
      error
    )
    throw error.response
  }
}
