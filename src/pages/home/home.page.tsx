import { Space, Typography } from 'antd'
import { GithubOutlined } from '@ant-design/icons'
import { CenteredContainer } from '@/shared'
import style from './home.module.css'

const HomePage = () => {
  return (
    <CenteredContainer>
      <Space direction="vertical">
        <Typography.Title>Free Fake Store</Typography.Title>
        <Typography.Title level={3}>
          Based on{' '}
          <a href="https://dummyjson.com/" target="_blank">
            DummyJSON Server
          </a>
        </Typography.Title>
        <a
          href="https://github.com/KirylYurhulski/Dummy-Shopify/"
          target="_blank"
          className={style.github}
        >
          <GithubOutlined />
          GitHub
        </a>
      </Space>
    </CenteredContainer>
  )
}

export const Component = HomePage
