import { href, useNavigate } from 'react-router'
import { Menu, type MenuProps } from 'antd'
import { AppstoreOutlined } from '@ant-design/icons'
import MenuItem from 'antd/es/menu/MenuItem'
import { useGetCategoriesQuery } from '../../api/server.api'
import { ROUTES } from '@/shared'

type MenuItem = Required<MenuProps>['items'][number]

export const CategoriesMenu = () => {
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
    />
  )
}
