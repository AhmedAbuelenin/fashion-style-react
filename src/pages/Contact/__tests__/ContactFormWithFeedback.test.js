import {screen} from '@testing-library/react'
import ContactFormWithFeedback from '../ContactFormWithFeedback/ContactFormWithFeedback'
import {setup} from '../../../utils/utils-for-tests'

describe('ContactFormWithFeedback', () => {
  it('should display a success msg if all submitted inputs are valid', async () => {
    const {user} = setup(<ContactFormWithFeedback />)

    await user.type(screen.getByRole('textbox', {name: /name/i}), 'testname')
    await user.type(
      screen.getByRole('textbox', {name: /email/i}),
      'validemail@example.com'
    )
    await user.type(screen.getByRole('textbox', {name: /message/i}), 'mgm%')
    await user.click(screen.getByRole('button', {name: /send message/i}))

    const successMsg = await screen.findByText(
      'Thanks for contacting us! We will be in touch with you shortly.',
      {},
      {timeout: 3000}
    )

    expect(successMsg).toBeInTheDocument()
  })
})
