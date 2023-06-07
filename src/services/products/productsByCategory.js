import Interceptor from '../../config/interceptor'

export const getProductsByCategory = async (
  categories = 'men_all',
  page = 0
) => {
  try {
    const res = await Interceptor.get(`/products/list`, {
      params: {
        currentpage: page,
        categories
      }
    })
    return res.data
  } catch (error) {
    throw error
  }
}
