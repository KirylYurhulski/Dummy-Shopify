import { Button, Layout, Typography, Badge } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '@/shared'
import style from './header.module.css'

export const HeaderLayout = () => {
  return (
    <Layout.Header className={style.header}>
      <Typography.Title
        level={5}
        style={{
          marginTop: '5px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <NavLink to={ROUTES.HOME}>Dummy Shopify Redux Toolkit</NavLink>
      </Typography.Title>
      <Badge count={3} offset={[10, 10]}>
        <Button shape="circle" size="large" icon={<ShoppingCartOutlined />}></Button>
      </Badge>
    </Layout.Header>
  )
}
