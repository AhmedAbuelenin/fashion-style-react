import Interceptor from '../../config/interceptor'

export const getFeaturedProducts = async () => {
  try {
    const res = await Interceptor.get(`/products/list`, {
      params: {
        categories: 'men_all',
        pagesize: '3'
      }
    })
    return res.data
  } catch (error) {
    throw error
  }
}
