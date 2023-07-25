import {cleanup, screen} from '@testing-library/react'
import {renderWithProviders, setup} from '../../../utils/utils-for-tests'
import ProductInfo from '../ProductInfo/ProductInfo'

afterEach(cleanup)

describe('ProductInfo', () => {
  const item = {
    code: '23_group_1245',
    name: 'T-shirt',
    description: 'Nice t-shirt',
    price: {value: 25},
    images: [{baseUrl: 'https://nicet-shirt'}],
    categoryName: 'men'
  }

  it('should display the product name', () => {
    renderWithProviders(<ProductInfo item={item} />)

    const name = screen.getByTestId('product-name')

    expect(name).toBeInTheDocument()
  })

  it('should display the product name with correct value', () => {
    renderWithProviders(<ProductInfo item={item} />)

    const name = screen.getByTestId('product-name')

    expect(name.textContent).toBe(item.name)
  })

  it('should display the product price', () => {
    renderWithProviders(<ProductInfo item={item} />)

    const price = screen.getByTestId('product-price')

    expect(price).toBeInTheDocument()
  })

  it('should display the product price with correct value', () => {
    renderWithProviders(<ProductInfo item={item} />)

    const price = screen.getByTestId('product-price')

    expect(price.textContent).toBe(`$${item.price.value}`)
  })

  it('should display the ProductAction component', () => {
    renderWithProviders(<ProductInfo item={item} />)

    const button = screen.getByTestId('add-to-cart')

    expect(button).toBeInTheDocument()
  })

  it('should display the View Cart link if the product is added to cart', async () => {
    const {user} = setup(<ProductInfo item={item} />)

    const button = screen.getByTestId('add-to-cart')

    await user.click(button)

    const viewCartLink = await screen.findByTestId(
      'view-cart',
      {},
      {timeout: 2000}
    )

    expect(viewCartLink).toBeInTheDocument()
  })

  it('should navigate to /cart route when view cart link is clicked', async () => {
    const {user} = setup(<ProductInfo item={item} />)

    const button = screen.getByTestId('add-to-cart')

    await user.click(button)

    const viewCartLink = await screen.findByTestId(
      'view-cart',
      {},
      {timeout: 2000}
    )

    await user.click(viewCartLink)

    expect(window.location.pathname).toBe('/cart')
  })
})
