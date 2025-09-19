import React from 'react'
import { Outlet } from 'react-router'
import { Layout } from 'antd'

const style: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 'calc(100vh - 64px)',
  height: '100%',
  lineHeight: '120px',
}

export const ContentLayout = () => {
  return (
    <Layout.Content style={style}>
      <div style={{ marginTop: '1rem' }}>
        <Outlet />
      </div>
    </Layout.Content>
  )
}
