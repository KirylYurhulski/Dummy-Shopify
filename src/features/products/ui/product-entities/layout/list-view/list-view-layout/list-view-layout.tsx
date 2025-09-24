import { Flex, List } from 'antd'
import type { ReactNode } from 'react'

export const ListViewLayout = ({ children }:{ children: ReactNode }) => {
  return (
    <Flex justify="center">
      <List itemLayout="vertical" style={{ width: '100%' }}>
        {children}
      </List>
    </Flex>
  )
}