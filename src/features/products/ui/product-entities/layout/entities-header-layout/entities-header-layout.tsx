import { Typography } from 'antd'
import type { ReactNode } from 'react'

export const EtitiesHeaderLayout = ({ title }:{ title: ReactNode }) => {
  return <Typography.Title level={4}>{title}</Typography.Title>
}