import type { ReactNode } from 'react'
import { Spin } from 'antd'
import { CenteredContainer } from '../centered-container/centered-container'

const contentStyle: React.CSSProperties = {
  padding: 50,
  borderRadius: 4,
}

const content = <div style={contentStyle} />

export const DataLoader = ({ tip }: { tip?: ReactNode }) => {
  return (
    <CenteredContainer>
      <Spin size="large" tip={tip}>
        {content}
      </Spin>
    </CenteredContainer>
  )
}
