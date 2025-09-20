import type { ReactNode } from 'react'
import { Empty } from 'antd'
import { CenteredContainer } from '../centered-container/centered-container'

export const DataEmpty = ({ description }: { description?: ReactNode }) => {
  return (
    <CenteredContainer>
      <Empty description={description} />
    </CenteredContainer>
  )
}
