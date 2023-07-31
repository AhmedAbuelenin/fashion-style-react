import {cleanup, screen} from '@testing-library/react'
import {renderWithProviders} from '../../../utils/utils-for-tests'
import {CartModalItem} from '../CartModal'

describe('CartModalItem', () => {
  const item = {
    code: '23_group_1245',
    name: 'T-shirt',
    description: 'Nice t-shirt',
    price: 25,
    quantity: 2,
    image: 'https://nicet-shirt/',
    categoryName: 'men'
  }

  it('should display item img', () => {
    renderWithProviders(<CartModalItem item={item} />)

    const img = screen.getByTestId('item-img')

    expect(img).toBeInTheDocument()
    expect(img.src).toBe(item.image)
  })

  it('should call action removeCartItem when click on delete icon', async () => {
    renderWithProviders(<CartModalItem item={item} />)

    const deleteIcon = screen.getByTestId('item-delete-icon')

    expect(deleteIcon).toBeInTheDocument()
  })

  it('should display item name', () => {
    renderWithProviders(<CartModalItem item={item} />)

    const name = screen.getByTestId('item-name')

    expect(name).toBeInTheDocument()
    expect(name.textContent).toBe(item.name)
  })

  it('should display item total price', () => {
    renderWithProviders(<CartModalItem item={item} />)

    const totalPrice = screen.getByTestId('item-total-price')

    expect(totalPrice).toBeInTheDocument()
    expect(totalPrice.textContent).toBe(`${item.quantity} x $${item.price}`)
  })
})
