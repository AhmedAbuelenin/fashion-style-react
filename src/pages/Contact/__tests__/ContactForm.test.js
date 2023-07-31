import {screen, waitFor} from '@testing-library/react'
import {ContactForm} from '../index'
import {setup} from '../../../utils/utils-for-tests'

describe('ContactForm', () => {
  it('should display an error message if name, email and message are required', async () => {
    const {user} = setup(<ContactForm />)

    await user.click(screen.getByRole('button', {name: /send message/i}))

    const errsArray = await screen.findAllByText(/this field is required/i)

    expect(errsArray).toHaveLength(3)
  })

  it('should display an error message if name is not valid', async () => {
    const {user} = setup(<ContactForm />)

    await user.type(
      screen.getByRole('textbox', {name: /name/i}),
      'na +-90@#^&()/!'
    )
    await user.click(screen.getByRole('button', {name: /send message/i}))

    const errMsg = await screen.findByText(
      /please enter between 3 and 20 letters/i
    )

    expect(errMsg).toBeInTheDocument()
  })

  it('should display an error message if email is not in a valid format', async () => {
    const {user} = setup(<ContactForm />)

    await user.type(
      screen.getByRole('textbox', {name: /email/i}),
      'invalidemail@ 9.co'
    )
    await user.click(screen.getByRole('button', {name: /send message/i}))

    const errMsg = await screen.findByText(
      /please enter a valid email format/i,
      {},
      {timeout: 1500}
    )

    expect(errMsg).toBeInTheDocument()
  })

  it('should display an error message if message is not valid', async () => {
    const {user} = setup(<ContactForm />)

    await user.type(screen.getByLabelText('Message*'), 'a9 ')
    await user.click(screen.getByRole('button', {name: /send message/i}))

    const errMsg = await screen.findByText(
      /please enter between 3 and 500 chars and must include at least 3 letters/i
    )

    expect(errMsg).toBeInTheDocument()
  })

  it('should call successful submit function if all inputs are valid', async () => {
    const onSuccessfulSubmit = jest.fn()
    const {user} = setup(
      <ContactForm onSuccessfulSubmit={onSuccessfulSubmit} />
    )

    await user.type(screen.getByRole('textbox', {name: /name/i}), 'testname')
    await user.type(
      screen.getByRole('textbox', {name: /email/i}),
      'validemail@example.com'
    )
    await user.type(screen.getByLabelText('Message*'), 'mgm%')
    await user.click(screen.getByRole('button', {name: /send message/i}))

    await waitFor(
      () => {
        expect(onSuccessfulSubmit).toHaveBeenCalled()
      },
      {timeout: 3000}
    )
  })
})
