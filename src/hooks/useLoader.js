import {useCallback, useState} from 'react'

export const useLoader = () => {
  const [loading, setLoading] = useState(false)

  const toggleLoading = useCallback(() => {
    setLoading(status => !status)
  }, [])

  return {loading, toggleLoading}
}
