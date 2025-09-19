import { Flex, Layout } from 'antd'
import { HeaderLayout } from './header/header.layout'
import { SiderLayout } from './sider/sider.layout'
import { ContentLayout } from './content/content.layout'

const layoutStyle: React.CSSProperties = {
  overflow: 'hidden',
  width: '100%',
  backgroundColor: 'white',
}

export const AppLayout = () => {
  return (
    <Flex gap="middle" wrap>
      <Layout style={layoutStyle}>
        <HeaderLayout />
        <Layout>
          <SiderLayout />
          <ContentLayout />
        </Layout>
      </Layout>
    </Flex>
  )
}
