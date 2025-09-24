import type { FC, ReactNode } from 'react'
import { Flex } from 'antd'

interface Props {
  header?: ReactNode
  filters: ReactNode
  children: ReactNode
  footer?: ReactNode
}

export const EntitiesLayout: FC<Props> = ({ header, filters, children, footer }) => {
  return (
    <>
      {header}
      <Flex vertical gap="middle" style={{ alignItems: 'center' }}>
        <div style={{ width: '60%' }}>{filters}</div>
      </Flex>
      {children}
      {footer}
    </>
  )
}
