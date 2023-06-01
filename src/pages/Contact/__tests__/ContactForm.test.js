import {screen, fireEvent, render, cleanup} from '@testing-library/react'
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
      await screen.findByText('Please enter between 3 and 800 chars')
    ).toBeInTheDocument()
  })

  it('should submit the form if all inputs are valid', async () => {
    render(<ContactForm />)
    const nameInput = screen.getByLabelText('Name*')
    const emailInput = screen.getByLabelText('Email*')
    const messageInput = screen.getByLabelText('Message*')
    fireEvent.change(nameInput, {target: {value: 'testname'}})
    fireEvent.change(emailInput, {target: {value: 'validemail@example.com'}})
    fireEvent.change(messageInput, {target: {value: 'mg%'}})
    fireEvent.click(screen.getByText('SEND MESSAGE'))
    setTimeout(() => {
      expect(
        screen.getByText(
          'Thanks for contacting us! We will be in touch with you shortly.'
        )
      ).toBeInTheDocument()
    }, 1500)
  })
})