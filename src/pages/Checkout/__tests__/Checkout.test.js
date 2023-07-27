import {cleanup, screen, waitFor} from '@testing-library/react'
import {setup} from '../../../utils/utils-for-tests'
import Checkout from '../Checkout'

afterEach(cleanup)

describe('Checkout', () => {
  const initialState = {
    billingDetails: {
      firstName: 'ftName',
      lastName: 'ltName',
      companyName: '',
      country: 'Egypt',
      state: 'Cairo',
      address: 'myAddress',
      phone: '+2011121212',
      email: 'email@example.com',
      orderNotes: ''
    }
  }

  it.each([['anz%$_+-&!'], ['anZ1'], ['an '], ['A  '], ['a'.repeat(11)]])(
    'should display an error message if first name is not valid',
    async name => {
      const {user} = setup(<Checkout />)

      await user.type(screen.getByTestId('first-name-input'), name)
      await user.click(screen.getByTestId('place-order-button'))

      const errMsg = await screen.findByText(
        /Please enter between 3 and 10 letters/i
      )

      expect(errMsg).toBeInTheDocument()
    }
  )

  it.each([['anz%$_+-&!'], ['anZ1'], ['an '], ['A  '], ['a'.repeat(11)]])(
    'should display an error message if last name is not valid',
    async name => {
      const {user} = setup(<Checkout />)

      await user.type(screen.getByTestId('last-name-input'), name)
      await user.click(screen.getByTestId('place-order-button'))

      const errMsg = await screen.findByText(
        /Please enter between 3 and 10 letters/i
      )

      expect(errMsg).toBeInTheDocument()
    }
  )

  it.each([['an #1^'], ['an '], ['A  '], ['a'.repeat(51)]])(
    'should display an error message if company name is not valid',
    async name => {
      const {user} = setup(<Checkout />)

      await user.type(screen.getByTestId('company-name-input'), name)
      await user.click(screen.getByTestId('place-order-button'))

      const errMsg = await screen.findByText(
        /Please enter between 3 and 50 chars and must include at least 3 letters/i
      )

      expect(errMsg).toBeInTheDocument()
    }
  )

  it.each([['an #1^'], ['an '], ['A  '], ['ab'.repeat(41)]])(
    'should display an error message if address is not valid',
    async address => {
      const {user} = setup(<Checkout />)

      await user.type(screen.getByTestId('address-input'), address)
      await user.click(screen.getByTestId('place-order-button'))

      const errMsg = await screen.findByText(
        /Please enter between 3 and 80 chars and must include at least 3 letters/i
      )

      expect(errMsg).toBeInTheDocument()
    }
  )

  it.each([['+' + '1'.repeat(17)], ['+0112223'], ['01122233'], ['+0112223R']])(
    'should display an error message if phone is not valid',
    async phone => {
      const {user} = setup(<Checkout />)

      await user.type(screen.getByTestId('phone-input'), phone)
      await user.click(screen.getByTestId('place-order-button'))

      const errMsg = await screen.findByText(
        /Please start with phone code as \+20 and enter between 8 and 16 digits/i
      )

      expect(errMsg).toBeInTheDocument()
    }
  )

  it.each([
    ['invalid?@gmail.co'],
    ['invalidemail@.c'],
    ['invalidemail@co'],
    ['invalidemail@?+_*&%$.co']
  ])(
    'should display an error message if email is not in a valid format',
    async email => {
      const {user} = setup(<Checkout />)

      await user.type(screen.getByTestId('email-input'), email)
      await user.click(screen.getByTestId('place-order-button'))

      const errMsg = await screen.findByText(
        /Please enter a valid email format/i
      )

      expect(errMsg).toBeInTheDocument()
    }
  )

  it.each([['an #1^'], ['an '], ['A  '], ['a'.repeat(101)]])(
    'should display an error message if order notes is not valid',
    async notes => {
      const {user} = setup(<Checkout />)

      await user.type(screen.getByTestId('additional-info-textarea'), notes)
      await user.click(screen.getByTestId('place-order-button'))

      const errMsg = await screen.findByText(
        /Please enter between 3 and 100 chars and must include at least 3 letters/i
      )

      expect(errMsg).toBeInTheDocument()
    }
  )

  it('should display an error message if firstName, lastName, country, state, address, phone and email are required', async () => {
    const {user} = setup(<Checkout />)

    await user.click(screen.getByTestId('place-order-button'))

    const errsArray = await screen.findAllByText(/This field is required/i)

    expect(errsArray).toHaveLength(7)
  })

  it('should display a loader when click place order button then disappear when order is submitted successfully', async () => {
    const {user} = setup(<Checkout />, {preloadedState: initialState})

    await user.click(screen.getByTestId('place-order-button'))

    const loader = screen.getByTestId('loader')

    expect(loader).toBeInTheDocument()

    await waitFor(
      () => {
        expect(loader).not.toBeInTheDocument()
      },
      {timeout: 2000}
    )
  })

  it('should display a success message and a return to shop button if order placed successfully', async () => {
    const {user} = setup(<Checkout />)

    await user.type(screen.getByTestId('first-name-input'), 'fNTest')
    await user.type(screen.getByTestId('last-name-input'), 'lNTest')
    await user.type(screen.getByTestId('company-name-input'), 'mgn%')
    await user.type(screen.getByTestId('address-input'), 'address')
    await user.type(screen.getByTestId('phone-input'), '+201111111')
    await user.type(
      screen.getByTestId('additional-info-textarea'),
      'test notes'
    )
    await user.type(screen.getByTestId('email-input'), 'valid@gmail.co')

    await user.click(screen.getByLabelText(/Select a country or region/i))
    const egypt = await screen.findByText('Egypt', {}, {timeout: 2500})
    await user.click(egypt)

    await user.click(screen.getByLabelText(/Select a state/i))
    const cairo = await screen.findByText('Cairo', {}, {timeout: 1500})
    await user.click(cairo)

    await user.click(screen.getByTestId('place-order-button'))

    const successMsg = await screen.findByTestId(
      'submit-success-msg',
      {},
      {timeout: 1000}
    )
    const shopLink = screen.getByTestId('return-to-shop-link')

    expect(successMsg).toBeInTheDocument()
    expect(shopLink).toBeInTheDocument()
  })

  it('should display a success message even when optional inputs like company name and additional notes are not submitted', async () => {
    const {user} = setup(<Checkout />, {
      preloadedState: initialState
    })

    await user.click(screen.getByTestId('place-order-button'))

    const successMsg = await screen.findByTestId(
      'submit-success-msg',
      {},
      {timeout: 2000}
    )

    expect(successMsg).toBeInTheDocument()
  })

  it('should navigate to /shop route when shop link is clicked', async () => {
    const {user} = setup(<Checkout />, {preloadedState: initialState})

    await user.click(screen.getByTestId('place-order-button'))

    const shopLink = await screen.findByTestId(
      'return-to-shop-link',
      {},
      {timeout: 1000}
    )

    await user.click(shopLink)

    expect(window.location.pathname).toBe('/shop')
  })
})
