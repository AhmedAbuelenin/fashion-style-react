import * as yup from 'yup'

export default yup.object({
  firstName: yup
    .string()
    .required('This field is required')
    .test(
      'are-letters-between-3-and-10',
      'Please enter between 3 and 10 letters',
      value =>
        value && RegExp(/^(?=(?:.*[a-zA-Z]){3,})[a-zA-Z\s]{3,10}$/).test(value)
    ),
  lastName: yup
    .string()
    .required('This field is required')
    .test(
      'are-letters-between-3-and-10',
      'Please enter between 3 and 10 letters',
      value =>
        value && RegExp(/^(?=(?:.*[a-zA-Z]){3,})[a-zA-Z\s]{3,10}$/).test(value)
    ),
  companyName: yup.lazy(value => {
    if (value)
      return yup
        .string()
        .test(
          'are-chars-between-3-and-50-and-include-min-3-letters',
          'Please enter between 3 and 50 chars and must include at least 3 letters',
          value => RegExp(/^(?=(?:.*[a-zA-Z]){3,}).{3,50}$/).test(value)
        )

    return yup.string()
  }),
  country: yup.string().required('This field is required'),
  state: yup.string().required('This field is required'),
  address: yup
    .string()
    .required('This field is required')
    .test(
      'are-chars-between-3-and-80-and-include-min-3-letters',
      'Please enter between 3 and 80 chars and must include at least 3 letters',
      value => value && RegExp(/^(?=(?:.*[a-zA-Z]){3,}).{3,80}$/).test(value)
    ),
  phone: yup
    .string()
    .required('This field is required')
    .test(
      'are-digits-between-8-and-16',
      'Please start with phone code as +20 and enter between 8 and 16 digits',
      value => value && RegExp(/^\+\d{8,16}$/).test(value)
    ),
  email: yup
    .string()
    .required('This field is required')
    .test(
      'is-valid-email-format',
      'Please enter a valid email format',
      value =>
        value &&
        RegExp(/^[A-Za-z0-9._$%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i).test(value)
    )
    .test(
      'is-between-8-to-40-chars',
      'Please enter between 8 and 40 chars',
      value => value && value.length >= 8 && value.length <= 40
    ),
  orderNotes: yup.lazy(value => {
    if (value)
      return yup
        .string()
        .test(
          'are-chars-between-3-and-100-and-include-min-3-letters',
          'Please enter between 3 and 100 chars and must include at least 3 letters',
          value =>
            value && RegExp(/^(?=(?:.*[a-zA-Z]){3,}).{3,100}$/).test(value)
        )

    return yup.string()
  })
})
