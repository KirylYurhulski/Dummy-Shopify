import { Flex, Layout } from 'antd'
import { HeaderLayout } from '../header/header.layout'
import { SiderLayout } from '../sider/sider.layout'
import { ContentLayout } from '../content/content.layout'
import style from './main.module.css'

export const MainLayout = () => {
  return (
    <Flex gap="middle" wrap>
      <Layout className={style.main}>
        <HeaderLayout />
        <Layout>
          <SiderLayout />
          <ContentLayout />
        </Layout>
      </Layout>
    </Flex>
  )
}
