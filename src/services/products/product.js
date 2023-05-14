import Interceptor from '../../config/interceptor'

export const getProduct = async id => {
  try {
    const res = await Interceptor.get(`/products/detail`, {
      params: {
        productcode: id
      }
    })
    return res.data
  } catch (error) {
    throw error
  }
}
