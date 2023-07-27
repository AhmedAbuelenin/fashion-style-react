import ContentWrapper from '../../ContentWrapper/ContentWrapper'
import {render, screen} from '@testing-library/react'

describe('ContentWrapper', () => {
  it('should display heading element', () => {
    render(<ContentWrapper />)

    expect(screen.getByTestId('content-wrapper-heading')).toBeInTheDocument()
  })

  it('should display heading element with correct content', () => {
    render(<ContentWrapper heading='Test Heading' />)

    const heading = screen.getByTestId('content-wrapper-heading')

    expect(heading.textContent).toBe('Test Heading')
  })
})
