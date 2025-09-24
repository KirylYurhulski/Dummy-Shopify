import { useSearchParams } from 'react-router-dom'
import { Input } from 'antd'

export const EntitiesSearchInput = () => {
  const [_, setSearchParams] = useSearchParams()

  return (
    <Input.Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      onSearch={value => setSearchParams({ q: value })}
    />
  )
}
