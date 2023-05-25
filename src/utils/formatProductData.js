import {generateItemIDFromCode} from './generateItemIDFromCode'

export function formatProductData(data) {
  return {
    code: generateItemIDFromCode(data.code),
    name: data.name,
    description:
      data.description ||
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit',
    price: data.whitePrice?.price || data.price?.value,
    image:
      data.articlesList?.[0].galleryDetails[0].baseUrl ||
      data.images?.[0].baseUrl,
    categoryName: data.customerGroup || data.categoryName
  }
}
