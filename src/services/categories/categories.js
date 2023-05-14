import Interceptor from '../../config/interceptor'

export const getCategories = async () => {
  try {
    const res = await Interceptor.get(`/categories/list`)
    return res.data
  } catch (error) {
    throw error
  }
}
