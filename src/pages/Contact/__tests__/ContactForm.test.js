import {
  screen,
  fireEvent,
  render,
  cleanup,
  waitFor
} from '@testing-library/react'
import {ContactForm} from '../index'

afterEach(cleanup)

describe('ContactForm', () => {
  it('should display an error message if name, email and message are required', async () => {
    render(<ContactForm />)

    fireEvent.click(screen.getByText('SEND MESSAGE'))

    const errsArray = await screen.findAllByText('This field is required')

    expect(errsArray).toHaveLength(3)
  })

  it('should display an error message if name is not valid', async () => {
    render(<ContactForm />)

    const nameInput = screen.getByLabelText('Name*')

    fireEvent.change(nameInput, {target: {value: 'na +-90@#^&()/!'}})
    fireEvent.click(screen.getByText('SEND MESSAGE'))

    expect(
      await screen.findByText('Please enter between 3 and 20 letters')
    ).toBeInTheDocument()
  })

  it('should display an error message if email is not in a valid format', async () => {
    render(<ContactForm />)

    const emailInput = screen.getByLabelText('Email*')

    fireEvent.change(emailInput, {target: {value: 'invalidemail@ 9.co'}})
    fireEvent.click(screen.getByText('SEND MESSAGE'))

    expect(
      await screen.findByText('Please enter a valid email format')
    ).toBeInTheDocument()
  })

  it('should display an error message if message is not valid', async () => {
    render(<ContactForm />)
    const messageInput = screen.getByLabelText('Message*')

    fireEvent.change(messageInput, {target: {value: 'a9 '}})
    fireEvent.click(screen.getByText('SEND MESSAGE'))

    expect(
      await screen.findByText(
        'Please enter between 3 and 500 chars and must include at least 3 letters'
      )
    ).toBeInTheDocument()
  })

  it('should call successful submit function if all inputs are valid', async () => {
    const onSuccessfulSubmit = jest.fn()

    render(<ContactForm onSuccessfulSubmit={onSuccessfulSubmit} />)
    const nameInput = screen.getByLabelText('Name*')
    const emailInput = screen.getByLabelText('Email*')
    const messageInput = screen.getByLabelText('Message*')

    fireEvent.change(nameInput, {target: {value: 'testname'}})
    fireEvent.change(emailInput, {target: {value: 'validemail@example.com'}})
    fireEvent.change(messageInput, {target: {value: 'mgm%'}})
    fireEvent.submit(screen.getByText('SEND MESSAGE'))

    await waitFor(
      () => {
        expect(onSuccessfulSubmit).toHaveBeenCalled()
      },
      {timeout: 3000}
    )
  })
})
