import { href, useLocation, useNavigate } from 'react-router'
import { Menu, type MenuProps } from 'antd'
import { AppstoreOutlined } from '@ant-design/icons'
import MenuItem from 'antd/es/menu/MenuItem'
import { useGetCategoriesQuery } from '../../api/server.api'
import { ROUTES } from '@/shared'

type MenuItem = Required<MenuProps>['items'][number]

export const CategoriesMenu = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { data } = useGetCategoriesQuery()

  const items: MenuItem[] = [
    {
      key: 'categories',
      label: 'Categories:',
      icon: <AppstoreOutlined />,
      children: data?.map(el => ({ key: el.slug, label: el.name })),
    },
  ]

  return (
    <Menu
      defaultOpenKeys={['categories']}
      mode="inline"
      items={items}
      onSelect={menuItem => navigate(href(ROUTES.PRODUCTS_CATEGORY, { slug: menuItem.key }))}
      selectedKeys={[selektedKey(location.pathname)]}
    />
  )
}

const selektedKey = (pathname: string): string => {
  const pathParts = pathname.split('/').filter(Boolean)
  return pathParts[pathParts.length - 1]
}
