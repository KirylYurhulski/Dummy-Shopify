import type { ReactNode } from 'react'
import { Row } from 'antd'

export const GridViewLayout = ({ children }: { children: ReactNode }) => {
  return <Row justify="space-evenly">{children}</Row>
}
