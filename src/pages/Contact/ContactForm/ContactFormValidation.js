import * as yup from 'yup'

export default yup.object({
  name: yup
    .string()
    .required('This field is required')
    .test(
      'are-letters-between-3-and-20',
      'Please enter between 3 and 20 letters',
      value =>
        value && RegExp(/^(?=(?:.*[a-zA-Z]){3,})[a-zA-Z\s]{3,20}$/).test(value)
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
  message: yup
    .string()
    .required('This field is required')
    .test(
      'are-chars-between-3-and-500-and-include-min-3-letters',
      'Please enter between 3 and 500 chars and must include at least 3 letters',
      value => value && RegExp(/^(?=(?:.*[a-zA-Z]){3,}).{3,500}$/).test(value)
    )
})
