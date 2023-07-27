import FieldWrapper from '../FieldWrapper'
import {render, screen} from '@testing-library/react'

describe('FieldWrapper', () => {
  it('should display field label', () => {
    render(<FieldWrapper />)

    expect(screen.getByTestId('field-label')).toBeInTheDocument()
  })

  it('should display field state sign if field is required', () => {
    render(<FieldWrapper required />)

    const fieldState = screen.getByTestId('field-state')

    expect(fieldState.textContent).toBe('*')
  })

  it('should display field state sign if field is optional', () => {
    render(<FieldWrapper />)

    const fieldState = screen.getByTestId('field-state')

    expect(fieldState.textContent).toContain('optional')
  })

  it('should display optional class if field state is optional', () => {
    render(<FieldWrapper />)

    expect(screen.getByTestId('field-state')).toHaveClass(
      'field-wrapper__sign--optional'
    )
  })
})
