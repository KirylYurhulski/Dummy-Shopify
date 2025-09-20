import type { ReactNode } from 'react'
import { Flex } from 'antd'
import style from './centered-container.module.css'

export const CenteredContainer = ({ children }: { children: ReactNode }) => {
  return (
    <Flex className={style.container} align="center" justify="center">
      {children}
    </Flex>
  )
}
