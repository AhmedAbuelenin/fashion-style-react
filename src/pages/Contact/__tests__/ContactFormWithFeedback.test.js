import {fireEvent, render, screen} from '@testing-library/react'
import ContactFormWithFeedback from '../ContactFormWithFeedback/ContactFormWithFeedback'

describe('ContactFormWithFeedback', () => {
  it('should display a success msg if all submitted inputs are valid', async () => {
    render(<ContactFormWithFeedback />)

    const nameInput = screen.getByLabelText('Name*')
    const emailInput = screen.getByLabelText('Email*')
    const messageInput = screen.getByLabelText('Message*')

    fireEvent.change(nameInput, {target: {value: 'testname'}})
    fireEvent.change(emailInput, {target: {value: 'validemail@example.com'}})
    fireEvent.change(messageInput, {target: {value: 'mgm%'}})
    fireEvent.submit(screen.getByText('SEND MESSAGE'))

    const successMsg = await screen.findByText(
      'Thanks for contacting us! We will be in touch with you shortly.',
      {},
      {timeout: 3000}
    )

    expect(successMsg).toBeInTheDocument()
  })
})
