import React, {useState } from 'react'
import { Button, Layout } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'

const style: React.CSSProperties = {
  textAlign: 'center',
  backgroundColor: 'white',
}

export const SiderLayout = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout.Sider style={style} trigger={null} collapsible collapsed={collapsed}>
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      />
    </Layout.Sider>
  )
}
