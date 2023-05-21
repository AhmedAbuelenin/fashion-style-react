export function convertArrayToObject(productArray) {
  const obj = {}

  productArray.forEach(item => {
    obj[item.code] = item
  })

  return obj
}
