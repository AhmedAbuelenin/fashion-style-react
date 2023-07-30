import {cleanup, fireEvent, screen, waitFor} from '@testing-library/react'
import {renderWithProviders, setup} from '../../../utils/utils-for-tests'
import ProductAction from '../ProductAction/ProductAction'
import {store} from './../../../redux/store'
import {setCartItem} from '../../../redux/slices'
import {formatProductData} from '../../../utils'

afterEach(cleanup)

jest.useFakeTimers()

describe('ProductAction', () => {
  it('should display a loader when user click on add to cart to add an item to the cart then it disappears after a second', async () => {
    const {user} = setup(
      <ProductAction item={{code: ''}} onAddToCart={jest.fn()} />
    )

    user.click(screen.getByRole('button', {name: /add to cart/i}))

    const loadingIcon = await screen.findByTestId('loading-icon')

    expect(loadingIcon).toBeInTheDocument()

    await waitFor(
      () => {
        expect(loadingIcon).not.toBeInTheDocument()
      },
      {timeout: 2000}
    )
  })

  it('should display a check icon when item is added to cart', async () => {
    renderWithProviders(<ProductAction isAdded={true} loading={false} />)

    expect(screen.getByTestId('check-icon')).toBeInTheDocument()
  })

  it('should dispatch action setCartItem when click Add To Cart', async () => {
    const item = {
      code: '23_group_1245',
      name: 'T-shirt',
      description: ' Lorem, ipsum dolor.',
      price: {value: 25},
      images: [{baseUrl: 'https://nicet-shirt/'}],
      categoryName: 'men'
    }

    store.dispatch = jest.fn()

    renderWithProviders(<ProductAction item={item} />, {store})

    fireEvent.click(screen.getByRole('button', {name: /add to cart/i}))

    expect(store.dispatch).toBeCalledWith(setCartItem(formatProductData(item)))
  })
})
