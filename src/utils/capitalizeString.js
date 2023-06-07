export function capitalizeString(string) {
  const letters = string.split('')
  letters[0] = letters[0].toUpperCase()
  const capitalizedStr = letters.join('')
  return capitalizedStr
}
