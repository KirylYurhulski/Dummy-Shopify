import { Flex, Radio } from 'antd'
import { AppstoreOutlined, UnorderedListOutlined } from '@ant-design/icons'
import { useViewMode } from '@/features/products/api/view-context/view-context'
import { VIEW_MODE } from '@/features/products/models/view'

const options = [
  {
    mode: VIEW_MODE.GRID,
    icon: <AppstoreOutlined style={{ fontSize: 30 }} />,
    label: 'Grid View',
  },
  {
    mode: VIEW_MODE.LIST,
    icon: <UnorderedListOutlined style={{ fontSize: 30 }} />,
    label: 'List View',
  },
].map(({ mode, icon, label }) => ({
  value: mode,
  label: (
    <Flex gap="small" justify="center" align="center">
      {icon}
      {label}
    </Flex>
  ),
}))

export const EntitiesViewModeToggle = () => {
  const { mode, changeViewMode } = useViewMode()

  return (
    <Flex vertical gap="middle">
      <Radio.Group
        block
        options={options}
        value={mode}
        onChange={e => changeViewMode(e.target.value)}
      />
    </Flex>
  )
}