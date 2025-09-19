import { Outlet } from 'react-router'
import { Layout } from 'antd'
import style from './content.module.css'

export const ContentLayout = () => {
  return (
    <Layout.Content className={style.content}>
      <div style={{ marginTop: '1rem' }}>
        <Outlet />
      </div>
    </Layout.Content>
  )
}
