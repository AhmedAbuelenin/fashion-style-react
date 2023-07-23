import {cleanup, fireEvent, screen} from '@testing-library/react'
import {renderWithProviders} from '../../../utils/utils-for-tests'
import ProductInfo from '../ProductInfo/ProductInfo'

afterEach(cleanup)

describe('ProductInfo', () => {
  it('should display view cart when item is added to cart', async () => {
    const item = {
      code: '23_group_1245',
      name: 'T-shirt',
      description: 'Nice t-shirt',
      price: {value: 25},
      images: [{baseUrl: 'https://nicet-shirt'}],
      categoryName: 'men'
    }

    renderWithProviders(<ProductInfo item={item} />)

    const button = screen.getByText('ADD TO CART')

    fireEvent.click(button)

    const link = await screen.findByText('View cart')

    expect(link).toBeInTheDocument()
  })
})
