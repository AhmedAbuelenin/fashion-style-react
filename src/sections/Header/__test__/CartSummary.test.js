import {fireEvent, screen} from '@testing-library/react'
import {renderWithProviders} from '../../../utils/utils-for-tests'
import {CartModalSummary} from '../CartModal'

describe('CartModalSummary', () => {
  it('should display subtotal label', () => {
    renderWithProviders(<CartModalSummary subtotal={25} />)

    const subtotalLabel = screen.getByText(/subtotal/i)

    expect(subtotalLabel).toBeInTheDocument()
  })

  it('should display subtotal value with two decimal digits', () => {
    renderWithProviders(<CartModalSummary subtotal={25} />)

    const totalPrice = screen.getByText('$25.00')

    expect(totalPrice).toBeInTheDocument()
  })

  it('should display checkout and view cart links', () => {
    renderWithProviders(<CartModalSummary subtotal={25} />)

    const checkoutLink = screen.getByText(/checkout/i)
    const viewCartLink = screen.getByText(/view cart/i)

    expect(checkoutLink).toBeInTheDocument()
    expect(viewCartLink).toBeInTheDocument()
  })

  it('should navigate to checkout page when user click on checkout link', async () => {
    renderWithProviders(<CartModalSummary subtotal={25.0} />)

    fireEvent.click(screen.getByText(/checkout/i))

    expect(window.location.pathname).toBe('/checkout')
  })

  it('should navigate to cart page when user click on cart link', async () => {
    renderWithProviders(<CartModalSummary subtotal={25.0} />)

    fireEvent.click(screen.getByText(/view cart/i))

    expect(window.location.pathname).toBe('/cart')
  })
})
