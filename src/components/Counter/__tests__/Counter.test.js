import {render, cleanup, screen} from '@testing-library/react'
import Counter from '../Counter'
import {setup} from '../../../utils/utils-for-tests'

afterEach(cleanup)

it('should display quantity input', () => {
  render(<Counter />)

  expect(
    screen.getByRole('spinbutton', {name: /quantity/i})
  ).toBeInTheDocument()
})

it('should display increment button', async () => {
  render(<Counter />)

  expect(
    screen.getByRole('button', {
      name: /increment quantity/i
    })
  ).toBeInTheDocument()
})

it('should display decrement button', async () => {
  render(<Counter />)

  expect(
    screen.getByRole('button', {
      name: /decrement quantity/i
    })
  ).toBeInTheDocument()
})

it('should display initial quantity of 1 to quantity input', () => {
  render(<Counter />)

  const input = screen.getByRole('spinbutton', {name: /quantity/i})

  expect(input.value).toBe('1')
})

it('increment button should increment correctly when clicked', async () => {
  const {user} = setup(<Counter onChangeCount={jest.fn()} />)

  const incrementButton = screen.getByRole('button', {
    name: /increment quantity/i
  })

  await user.click(incrementButton)
  await user.click(incrementButton)

  const input = screen.getByRole('spinbutton', {name: /quantity/i})

  expect(input.value).toBe('3')
})

it('decrement button should decrement correctly when clicked', async () => {
  const {user} = setup(<Counter onChangeCount={jest.fn()} />)

  const input = screen.getByRole('spinbutton', {name: /quantity/i})

  await user.click(
    screen.getByRole('button', {
      name: /increment quantity/i
    })
  )
  await user.click(
    screen.getByRole('button', {
      name: /decrement quantity/i
    })
  )

  expect(input.value).toBe('1')
})

it.each([['qb'], ['-!@#']])(
  'should display quantity input with numbers only',
  async input => {
    const {user} = setup(<Counter onChangeCount={jest.fn()} />)

    const qtyInput = screen.getByRole('spinbutton', {name: /quantity/i})

    await user.type(qtyInput, input)

    expect(qtyInput.value).toBe('1')
  }
)

it('should display quantity input with with positive values only', async () => {
  const {user} = setup(<Counter onChangeCount={jest.fn()} />)

  const input = screen.getByRole('spinbutton', {name: /quantity/i})

  await user.click(
    screen.getByRole('button', {
      name: /decrement quantity/i
    })
  )

  expect(input.value).toBe('1')
})

it('should display quantity input value with max three digits', async () => {
  const {user} = setup(<Counter onChangeCount={jest.fn()} />)

  const input = screen.getByRole('spinbutton', {name: /quantity/i})

  await user.type(input, '234')

  expect(input.value).toBe('123')
})
