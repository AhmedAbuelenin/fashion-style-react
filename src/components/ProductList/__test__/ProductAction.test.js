import {cleanup, fireEvent, screen, waitFor} from '@testing-library/react'
import {renderWithProviders} from '../../../utils/utils-for-tests'
import ProductAction from '../ProductAction/ProductAction'

afterEach(cleanup)

describe('ProductAction', () => {
  it('should display a loader when user click on add to cart to add an item to the cart then it disappears after a second', async () => {
    renderWithProviders(
      <ProductAction item={{code: ''}} onAddToCart={jest.fn()} />
    )

    const button = screen.getByText('ADD TO CART')

    fireEvent.click(button)

    const loadingIcon = await screen.findByTestId('loading-icon')

    expect(loadingIcon).toBeInTheDocument()

    await waitFor(() => {
      expect(loadingIcon).not.toBeInTheDocument()
    })
  })

  it('should display a check icon when item is added to cart', async () => {
    renderWithProviders(<ProductAction isAdded={true} loading={false} />)

    const checkIcon = screen.getByTestId('check-icon')

    expect(checkIcon).toBeInTheDocument()
  })
})
