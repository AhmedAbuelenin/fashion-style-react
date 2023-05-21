export function convertObjToArray(obj) {
  const arr = []

  for (const key in obj) {
    arr.push(obj[key])
  }

  return arr
}
