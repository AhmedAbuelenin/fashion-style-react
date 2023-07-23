import {cleanup, screen} from '@testing-library/react'
import {renderWithProviders} from '../../../utils/utils-for-tests'
import CartModal from '../CartModal/CartModal'

afterEach(cleanup)

describe('CartModal', () => {
  it('should display a message if no product data in cart', () => {
    renderWithProviders(<CartModal data={[]} />)

    const noDataMsg = screen.getByText('No products in the cart')

    expect(noDataMsg).toBeInTheDocument()
  })

  it('should display product list and summary product data is available', () => {
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

    renderWithProviders(<CartModal data={data} subtotal={25.0} />)

    const cartItems = screen.getByTestId('cart-modal-list')
    const cartSummary = screen.getByTestId('cart-modal-summary')

    expect(cartItems).toBeInTheDocument()
    expect(cartSummary).toBeInTheDocument()
  })
})
