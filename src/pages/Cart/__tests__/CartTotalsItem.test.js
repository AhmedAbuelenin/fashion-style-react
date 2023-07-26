import {cleanup, render, screen} from '@testing-library/react'
import CartTotalsItem from '../CartTotalsItem/CartTotalsItem'

afterEach(cleanup)

describe('CartTotalsItem', () => {
  const props = {
    subtitle: 'Total',
    value: 300,
    hasDiscount: true,
    hasDivider: false
  }

  it('should display subtitle', () => {
    render(<CartTotalsItem {...props} />)

    const subtitle = screen.getByTestId('subtitle')

    expect(subtitle).toBeInTheDocument()
  })

  it('should display subtitle in correct value', () => {
    render(<CartTotalsItem {...props} />)

    const subtitle = screen.getByTestId('subtitle')

    expect(subtitle.textContent).toBe(props.subtitle)
  })

  it('should display value', () => {
    render(<CartTotalsItem {...props} />)

    const value = screen.getByTestId('value')

    expect(value).toBeInTheDocument()
  })

  it('should display value correctly', () => {
    render(<CartTotalsItem {...props} />)

    const value = screen.getByTestId('value')

    expect(value.textContent).toContain(`${props.value.toFixed(2)}`)
  })

  it('should display discount minus sign correctly', () => {
    render(<CartTotalsItem {...props} />)

    const value = screen.getByTestId('value')

    expect(value.textContent).toContain(`-`)
  })
})
