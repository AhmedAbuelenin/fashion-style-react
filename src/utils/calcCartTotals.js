export function calcCartTotals(products) {
  let qtySum = 0
  let priceSum = 0

  products.forEach(product => {
    qtySum += product.quantity
    priceSum += product.quantity * product.price
  })

  return {qty: qtySum, price: priceSum}
}
