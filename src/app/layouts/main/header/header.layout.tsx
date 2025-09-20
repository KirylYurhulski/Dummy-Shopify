import { href, NavLink, useNavigate } from 'react-router-dom'
import { Button, Layout, Typography, Badge, Menu, type MenuProps } from 'antd'
import { HomeOutlined, ShopOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { ROUTES } from '@/shared'
import style from './header.module.css'

type MenuItem = Required<MenuProps>['items'][number]

const items: MenuItem[] = [
  {
    key: ROUTES.HOME,
    label: 'Home',
    icon: <HomeOutlined />,
  },
  {
    key: ROUTES.PRODUCTS,
    label: 'Products',
    icon: <ShopOutlined />,
  },
]

export const HeaderLayout = () => {
  const navigate = useNavigate()

  return (
    <Layout.Header className={style.header}>
      <Typography.Title
        level={4}
        style={{
          marginTop: '5px',
        }}
      >
        <NavLink to={ROUTES.HOME}>Free Fake Store</NavLink>
      </Typography.Title>
      <Menu
        mode="horizontal"
        items={items}
        style={{ width: '70%' }}
        onSelect={menuItem => navigate(href(menuItem.key))}
      />
      <Badge count={3} offset={[10, 10]}>
        <Button shape="circle" size="large" icon={<ShoppingCartOutlined />}></Button>
      </Badge>
    </Layout.Header>
  )
}
