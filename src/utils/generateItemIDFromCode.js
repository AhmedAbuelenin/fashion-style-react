export function generateItemIDFromCode(itemCode) {
  return itemCode.replace('_group_', '')
}
