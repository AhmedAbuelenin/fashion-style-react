import Interceptor from '../../config/interceptor'

export const getProducts = async () => {
  try {
    const res = await Interceptor.get(`/products/list`, {
      params: {
        pagesize: '3',
        categories: 'men_all'
      }
    })
    return res.data
  } catch (error) {
    throw error
  }
}
