import { Spin } from 'antd'
import { CenteredContainer } from '../centered-container/centered-container'

export const DataLoader = () => {
  return (
    <CenteredContainer>
      <Spin size="large" />
    </CenteredContainer>
  )
}
