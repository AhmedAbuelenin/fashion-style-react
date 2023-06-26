import {useCallback, useState} from 'react'

export const useCartItemAdded = () => {
  const [isAdded, setIsAdded] = useState(false)

  const markAsAdded = useCallback(() => {
    setIsAdded(true)
  }, [])

  return {isAdded, markAsAdded}
}
