import {render, cleanup, screen, fireEvent} from '@testing-library/react'
import Counter from '../Counter'

afterEach(cleanup)

it('initial count is 1', () => {
  render(<Counter />)
  expect(screen.getByTestId('count')).toHaveValue(1)
})

it('increment button increase count by 1', () => {
  render(<Counter onChangeCount={jest.fn()} />)
  fireEvent.click(screen.getByTestId('button-plus'))
  expect(screen.getByTestId('count')).toHaveValue(2)
})

it('decrement button decrease count by 1 with input value bigger than 1', () => {
  render(<Counter onChangeCount={jest.fn()} />)
  const countInput = screen.getByTestId('count')
  fireEvent.change(countInput, {target: {value: 2}})
  fireEvent.click(screen.getByTestId('button-minus'))
  expect(countInput).toHaveValue(1)
})

it('decrement button does not decrease count below 1', () => {
  render(<Counter onChangeCount={jest.fn()} />)
  fireEvent.click(screen.getByTestId('button-minus'))
  expect(screen.getByTestId('count')).toHaveValue(1)
})

it('input element accept numbers only', () => {
  render(<Counter onChangeCount={jest.fn()} />)
  const countInput = screen.getByTestId('count')
  fireEvent.change(countInput, {target: {value: 'abc'}})
  expect(countInput).toHaveValue(1)
})

it('input element has a maximum value of 3 digits', () => {
  render(<Counter onChangeCount={jest.fn()} />)
  const countInput = screen.getByTestId('count')
  fireEvent.change(countInput, {target: {value: 1000}})
  expect(countInput).toHaveValue(100)
})

it('input element has positive value only', () => {
  render(<Counter onChangeCount={jest.fn()} />)
  const countInput = screen.getByTestId('count')
  fireEvent.change(countInput, {target: {value: -100}})
  expect(countInput).toHaveValue(100)
})

it('input element minimum value is 1', () => {
  render(<Counter onChangeCount={jest.fn()} />)
  const countInput = screen.getByTestId('count')
  fireEvent.change(countInput, {target: {value: 0}})
  expect(countInput).toHaveValue(1)
})
