import SectionWrapper from '../../SectionWrapper/SectionWrapper'
import {render, screen} from '@testing-library/react'

describe('SectionWrapper', () => {
  it('should display heading element', () => {
    render(<SectionWrapper />)

    expect(screen.getByTestId('section-wrapper-heading')).toBeInTheDocument()
  })

  it('should display heading element with correct content', () => {
    render(<SectionWrapper heading='Test Heading' />)

    const heading = screen.getByTestId('section-wrapper-heading')

    expect(heading.textContent).toBe('Test Heading')
  })
})
