import {render, screen} from '@testing-library/react'
import {InputField} from '../..'

describe('InputField', () => {
  it('should display input', () => {
    const id = 'testId'

    render(<InputField required id={id} label={id} register={jest.fn()} />)

    expect(screen.getByRole('textbox', {name: `${id} *`})).toBeInTheDocument()
  })

  it("should display error if there's a validation error", () => {
    render(<InputField register={jest.fn()} error={'test error'} />)

    expect(screen.getByTestId('validation-error')).toBeInTheDocument()
  })

  it('should display validation error in the correct value', () => {
    render(<InputField register={jest.fn()} error={'test error'} />)

    const error = screen.getByTestId('validation-error')

    expect(error.textContent).toBe('test error')
  })
})
