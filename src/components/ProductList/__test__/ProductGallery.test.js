import {screen, waitFor} from '@testing-library/react'
import {ProductGallery} from '..'
import {setup} from '../../../utils/utils-for-tests'

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
    const {user} = setup(<ProductGallery item={item} />)

    await user.click(screen.getByRole('button', {name: /quick view/i}))

    const productModal = await screen.findByTestId('product-modal')
    const productModalContent = await screen.findByTestId(
      'product-modal-content'
    )

    expect(productModal).toBeInTheDocument()

    await user.click(productModalContent)

    expect(productModalContent).toBeInTheDocument()
  })

  it("should close product modal when user click on product modal's backdrop", async () => {
    const {user} = setup(<ProductGallery item={item} />)

    await user.click(screen.getByRole('button', {name: /quick view/i}))

    const productModal = await screen.findByTestId('product-modal')

    await user.click(productModal)

    await waitFor(() => {
      expect(productModal).not.toBeInTheDocument()
    })
  })

  it('should close product modal when user click on the close icon', async () => {
    const {user} = setup(<ProductGallery item={item} />)

    await user.click(screen.getByRole('button', {name: /quick view/i}))

    const productModal = await screen.findByTestId('product-modal')

    await user.click(screen.getByTestId('close-icon'))

    await waitFor(() => {
      expect(productModal).not.toBeInTheDocument()
    })
  })
})
