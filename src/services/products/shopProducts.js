import Interceptor from '../../config/interceptor'

export const getShopProducts = async () => {
  try {
    const res = await Interceptor.get(`/products/list`, {
      params: {
        categories: 'men_all'
      }
    })
    return res.data
  } catch (error) {
    throw error
  }
}
