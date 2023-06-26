import {useCallback, useState} from 'react'

export const useVisibleModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const toggleVisibleModal = useCallback(() => {
    setIsModalVisible(visible => !visible)
  }, [])

  return {isModalVisible, toggleVisibleModal}
}
