import {useEffect} from 'react'
import './Page.scss'

const Page = ({title = '', children}) => {
  const _title = title ? `${title} - Fashion Style` : 'Fashion Style'

  useEffect(() => {
    document.title = _title
  }, [_title])

  return <>{children}</>
}

export default Page
