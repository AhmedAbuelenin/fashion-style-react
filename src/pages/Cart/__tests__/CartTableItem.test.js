import {screen} from '@testing-library/react'
import CartTableItem from '../CartTableItem/CartTableItem'
import {renderWithProviders, setup} from '../../../utils/utils-for-tests'
import {generateItemIDFromCode} from '../../../utils'

describe('CartTableItem', () => {
  const item = {
    code: '23_group_1245',
    name: 'T-shirt',
    price: 25,
    quantity: 2,
    image: 'https://nicet-shirt/'
  }

  it('should display the delete icon', () => {
    renderWithProviders(<CartTableItem item={item} />)

    const deleteIcon = screen.getByTestId('delete-icon')

    expect(deleteIcon).toBeInTheDocument()
  })

  it('should display the item image link', () => {
    renderWithProviders(<CartTableItem item={item} />)

    const imgLink = screen.getByTestId('item-img-link')

    expect(imgLink).toBeInTheDocument()
  })

  it('should navigate to /productionDetailsPage route when click on item img link', async () => {
    const {user} = setup(<CartTableItem item={item} />)

    const imgLink = screen.getByTestId('item-img-link')

    await user.click(imgLink)

    expect(window.location.pathname).toBe(
      `/productDetailsPage/${generateItemIDFromCode(item.code)}`
    )
  })

  it('should display the item image with the correct src', () => {
    renderWithProviders(<CartTableItem item={item} />)

    const img = screen.getByTestId('item-img')

    expect(img.src).toBe(item.image)
  })

  it('should display the item name', () => {
    renderWithProviders(<CartTableItem item={item} />)

    const name = screen.getByTestId('item-name-link')

    expect(name).toBeInTheDocument()
  })

  it('should navigate to /productionDetailsPage route when click on item name link', async () => {
    const {user} = setup(<CartTableItem item={item} />)

    const nameLink = screen.getByTestId('item-name-link')

    await user.click(nameLink)

    expect(window.location.pathname).toBe(
      `/productDetailsPage/${generateItemIDFromCode(item.code)}`
    )
  })

  it('should display the item price', () => {
    renderWithProviders(<CartTableItem item={item} />)

    const price = screen.getByTestId('item-price')

    expect(price).toBeInTheDocument()
  })

  it('should display the item price with the correct value', () => {
    renderWithProviders(<CartTableItem item={item} />)

    const price = screen.getByTestId('item-price')

    expect(price.textContent).toContain(`${item.price}`)
  })

  it('should display the quantity counter', () => {
    renderWithProviders(<CartTableItem item={item} />)

    const counter = screen.getByTestId('counter')

    expect(counter).toBeInTheDocument()
  })

  it('should display the item subtotal', () => {
    renderWithProviders(<CartTableItem item={item} />)

    const subtotal = screen.getByTestId('item-subtotal')

    expect(subtotal).toBeInTheDocument()
  })

  it('should display the item subtotal with the correct value', () => {
    renderWithProviders(<CartTableItem item={item} />)

    const subtotal = screen.getByTestId('item-subtotal')

    expect(subtotal.textContent).toBe(
      `$${(item.price * item.quantity).toFixed(2)}`
    )
  })
})
