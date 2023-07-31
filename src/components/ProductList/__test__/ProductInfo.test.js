import {screen} from '@testing-library/react'
import {renderWithProviders, setup} from '../../../utils/utils-for-tests'
import ProductInfo from '../ProductInfo/ProductInfo'

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

    expect(screen.getByTestId('product-name')).toBeInTheDocument()
  })

  it('should display the product name with correct value', () => {
    renderWithProviders(<ProductInfo item={item} />)

    expect(screen.getByTestId('product-name')).toHaveTextContent(item.name)
  })

  it('should display the product price', () => {
    renderWithProviders(<ProductInfo item={item} />)

    expect(screen.getByTestId('product-price')).toBeInTheDocument()
  })

  it('should display the product price with correct value', () => {
    renderWithProviders(<ProductInfo item={item} />)

    const price = screen.getByTestId('product-price')

    expect(price).toHaveTextContent(`$${item.price.value}`)
  })

  it('should display the ProductAction component', () => {
    renderWithProviders(<ProductInfo item={item} />)

    expect(
      screen.getByRole('button', {name: /add to cart/i})
    ).toBeInTheDocument()
  })

  it('should display the View Cart link if the product is added to cart', async () => {
    const {user} = setup(<ProductInfo item={item} />)

    await user.click(screen.getByRole('button', {name: /add to cart/i}))

    const viewCartLink = await screen.findByRole(
      'link',
      {name: /view cart/i},
      {},
      {timeout: 5000}
    )

    expect(viewCartLink).toBeInTheDocument()
  })

  it('should navigate to /cart route when view cart link is clicked', async () => {
    const {user} = setup(<ProductInfo item={item} />)

    await user.click(screen.getByRole('button', {name: /add to cart/i}))

    const viewCartLink = await screen.findByRole(
      'link',
      {name: /view cart/i},
      {},
      {timeout: 3000}
    )

    await user.click(viewCartLink)

    expect(window.location.pathname).toBe('/cart')
  })
})
