import {cleanup, fireEvent, screen} from '@testing-library/react'
import {renderWithProviders} from '../../../utils/utils-for-tests'
import Checkout from '../Checkout'

afterEach(cleanup)

describe('CheckoutForm', () => {
  it('should display an error message if firstName, lastName, country, state, address, phone and email are required', async () => {
    renderWithProviders(<Checkout />)
    fireEvent.click(screen.getByText('PLACE ORDER'))
    const errsArray = await screen.findAllByText('This field is required')
    expect(errsArray).toHaveLength(7)
  })

  it.each([['anz%$_+-&!'], ['anZ1'], ['an '], ['A  '], ['a'.repeat(11)]])(
    'should display an error message if first or last name is not valid',
    async name => {
      renderWithProviders(<Checkout />)
      const firstNameInput = screen.getByLabelText('First name*')

      fireEvent.change(firstNameInput, {target: {value: name}})
      fireEvent.click(screen.getByText('PLACE ORDER'))
      const errMsg = await screen.findByText(
        'Please enter between 3 and 10 letters'
      )
      expect(errMsg).toBeInTheDocument()
    }
  )

  it.each([['an #1^'], ['an '], ['A  '], ['a'.repeat(51)]])(
    'should display an error message if company name is not valid',
    async name => {
      renderWithProviders(<Checkout />)
      const companyNameInput = screen.getByLabelText('Company name(optional)')

      fireEvent.change(companyNameInput, {target: {value: name}})
      fireEvent.click(screen.getByText('PLACE ORDER'))
      const errMsg = await screen.findByText(
        'Please enter between 3 and 50 chars and must include at least 3 letters'
      )
      expect(errMsg).toBeInTheDocument()
    }
  )

  it.each([['an #1^'], ['an '], ['A  '], ['ab'.repeat(41)]])(
    'should display an error message if address is not valid',
    async address => {
      renderWithProviders(<Checkout />)
      const addressInput = screen.getByLabelText('Address*')

      fireEvent.change(addressInput, {target: {value: address}})
      fireEvent.click(screen.getByText('PLACE ORDER'))
      const errMsg = await screen.findByText(
        'Please enter between 3 and 80 chars and must include at least 3 letters'
      )
      expect(errMsg).toBeInTheDocument()
    }
  )

  it.each([['+' + '1'.repeat(17)], ['+0112223'], ['01122233'], ['+0112223R']])(
    'should display an error message if phone is not valid',
    async phone => {
      renderWithProviders(<Checkout />)
      const phoneInput = screen.getByLabelText('Phone*')

      fireEvent.change(phoneInput, {target: {value: phone}})
      fireEvent.click(screen.getByText('PLACE ORDER'))
      const errMsg = await screen.findByText(
        'Please start with phone code as +20 and enter between 8 and 16 digits'
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
      renderWithProviders(<Checkout />)
      const emailInput = screen.getByLabelText('Email address*')

      fireEvent.change(emailInput, {target: {value: email}})
      fireEvent.click(screen.getByText('PLACE ORDER'))
      const errMsg = await screen.findByText(
        'Please enter a valid email format'
      )
      expect(errMsg).toBeInTheDocument()
    }
  )

  it.each([['an #1^'], ['an '], ['A  '], ['a'.repeat(101)]])(
    'should display an error message if order notes is not valid',
    async notes => {
      renderWithProviders(<Checkout />)
      const orderNotesInput = screen.getByLabelText('Order notes(optional)')
      fireEvent.change(orderNotesInput, {target: {value: notes}})
      fireEvent.click(screen.getByText('PLACE ORDER'))
      const errMsg = await screen.findByText(
        'Please enter between 3 and 100 chars and must include at least 3 letters'
      )
      expect(errMsg).toBeInTheDocument()
    }
  )

  // it('should submit the form if all inputs and selects are valid', async () => {
  //   renderWithProviders(<Checkout />)
  //   const firstNameInput = screen.getByLabelText('First name*')
  //   const lastNameInput = screen.getByLabelText('Last name*')
  //   const companyNameInput = screen.getByLabelText('Company name(optional)')
  //   const countrySelect = screen.getByLabelText('Select a country or region')
  //   const stateSelect = screen.getByLabelText('Select a state')
  //   const addressInput = screen.getByLabelText('Address*')
  //   const phoneInput = screen.getByLabelText('Phone*')
  //   const emailInput = screen.getByLabelText('Email address*')
  //   fireEvent.change(firstNameInput, {target: {value: 'fNTest'}})
  //   fireEvent.change(lastNameInput, {target: {value: 'lNTest'}})
  //   fireEvent.change(companyNameInput, {target: {value: 'mgn%'}})
  //   fireEvent.change(countrySelect, {
  //     target: {value: 'Afghanistan'}
  //   })
  //   fireEvent.change(stateSelect, {
  //     target: {value: 'Farah'}
  //   })
  //   fireEvent.change(addressInput, {target: {value: 'address'}})
  //   fireEvent.change(phoneInput, {target: {value: '+201111111'}})
  //   fireEvent.change(emailInput, {target: {value: 'invalid@gmail.co'}})
  //   fireEvent.click(screen.getByText('PLACE ORDER'))
  //   const errMsg = await screen.findByText(
  //     'Thanks for contacting us! We will be in touch with you shortly.'
  //   )
  //   expect(errMsg).toBeInTheDocument()
  // })
})
