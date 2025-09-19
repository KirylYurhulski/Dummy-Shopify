import { useState } from 'react'
import { Button, Layout } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import style from './sider.module.css'
import { CategoriesMenu } from '@/features'

export const SiderLayout = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout.Sider className={style.sider} trigger={null} collapsible collapsed={collapsed}>
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
      <CategoriesMenu />
    </Layout.Sider>
  )
}
