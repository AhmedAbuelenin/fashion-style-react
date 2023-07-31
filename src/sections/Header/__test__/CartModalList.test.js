import {cleanup, screen} from '@testing-library/react'
import {renderWithProviders} from '../../../utils/utils-for-tests'
import {CartModalList} from '../CartModal'

describe('CartModalList', () => {
  it('should display list if data is available', () => {
    const data = [
      {
        code: '23_group_1245',
        name: 'T-shirt',
        description: 'Nice t-shirt',
        price: 25,
        quantity: 2,
        image: 'https://nicet-shirt/',
        categoryName: 'men'
      }
    ]

    renderWithProviders(<CartModalList data={data} />)

    const list = screen.getByTestId('cart-modal-list')

    expect(list).toBeInTheDocument()
  })
})
