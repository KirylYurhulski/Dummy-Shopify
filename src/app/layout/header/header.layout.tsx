import React from 'react'
import { Button, Layout, Typography, Badge } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'

const style: React.CSSProperties = {
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: 'white',
}

export const HeaderLayout = () => {
  return (
    <Layout.Header style={style}>
      <Typography.Title
        level={5}
        style={{
          marginTop: '5px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        Dummy Shopify Redux Toolkit
      </Typography.Title>
      <Badge count={3} offset={[10, 10]}>
        <Button shape="circle" size="large" icon={<ShoppingCartOutlined />}></Button>
      </Badge>
    </Layout.Header>
  )
}
