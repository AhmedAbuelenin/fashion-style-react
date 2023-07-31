import {cleanup, screen} from '@testing-library/react'
import {ProductList} from '../..'
import {renderWithProviders} from '../../../utils/utils-for-tests'

describe('ProductList', () => {
  it('should display a loader while data is fetching', () => {
    renderWithProviders(<ProductList loading />)

    const loader = screen.getByTestId('loader')

    expect(loader).toBeInTheDocument()
  })

  it('should display empty content message if no data available', () => {
    renderWithProviders(<ProductList loading={false} data={[]} />)

    const emptyContent = screen.getByTestId('empty-content')

    expect(emptyContent).toBeInTheDocument()
  })

  it("should display a list if there's data", () => {
    const data = [
      {
        code: '23_group_1245',
        name: 'T-shirt',
        description: 'Nice t-shirt',
        price: {value: 25},
        images: [{baseUrl: 'https://nicet-shirt'}],
        categoryName: 'men'
      }
    ]

    renderWithProviders(<ProductList loading={false} data={data} />)

    const productList = screen.getByTestId('product-list')

    expect(productList).toBeInTheDocument()
  })
})
