import {cleanup, fireEvent, screen} from '@testing-library/react'
import {ProductGallery} from '..'
import {renderWithProviders} from '../../../utils/utils-for-tests'

cleanup(afterEach)

describe('ProductGallery', () => {
  const item = {
    code: '23_group_1245',
    name: 'T-shirt',
    description: 'Nice t-shirt',
    price: {value: 25},
    images: [{baseUrl: 'https://nicet-shirt'}],
    categoryName: 'men'
  }

  it('should display item details modal when user click on quick view', async () => {
    renderWithProviders(<ProductGallery item={item} />)

    const button = screen.getByText('QUICK VIEW')

    fireEvent.click(button)

    const productModal = await screen.findByTestId('product-modal')
    const productModalContent = await screen.findByTestId(
      'product-modal-content'
    )

    expect(productModal).toBeInTheDocument()

    fireEvent.click(productModalContent)

    expect(productModalContent).toBeInTheDocument()
  })

  it("should close product modal when user click on product modal's backdrop", async () => {
    renderWithProviders(<ProductGallery item={item} />)

    const button = screen.getByText('QUICK VIEW')

    fireEvent.click(button)

    const productModal = await screen.findByTestId('product-modal')

    fireEvent.click(productModal)

    expect(productModal).not.toBeInTheDocument()
  })

  it('should close product modal when user click on the close icon', async () => {
    renderWithProviders(<ProductGallery item={item} />)

    const button = screen.getByText('QUICK VIEW')

    fireEvent.click(button)

    const productModal = await screen.findByTestId('product-modal')
    const closeIcon = screen.getByTestId('close-icon')

    fireEvent.click(closeIcon)

    expect(productModal).not.toBeInTheDocument()
  })
})
