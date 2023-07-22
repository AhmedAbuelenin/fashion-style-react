import {useCallback, useState} from 'react'

export const useSuccessfulSubmit = () => {
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false)

  const showSuccessMsg = useCallback(() => {
    setIsSubmitSuccessful(true)
  }, [])

  return {isSubmitSuccessful, showSuccessMsg}
}
