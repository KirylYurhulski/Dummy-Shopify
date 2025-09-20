import type { FC } from 'react'
import { href, NavLink } from 'react-router'
import { Card, Image, Rate, Statistic } from 'antd'
import { ArrowDownOutlined } from '@ant-design/icons'
import type { IProduct } from '../../models/models'
import { ROUTES } from '@/shared'

interface Props {
  product: IProduct
}

export const ProductsListCard: FC<Props> = ({ product }) => {
  return (
    <Card
      title={
        <NavLink to={href(ROUTES.PRODUCTS_DETAIL, { productId: product.id.toString() })}>
          {product.title}
        </NavLink>
      }
      variant="borderless"
    >
      <div style={{ padding: 0, margin: 0 }}>
        <Image.PreviewGroup items={product.images}>
          <Image src={product.thumbnail} />
        </Image.PreviewGroup>
        <Rate disabled value={product.rating} />
        <Statistic
          value={product.price}
          precision={2}
          valueStyle={{ color: product.discountPercentage > 15 ? '#cf1322' : '#3f8600' }}
          prefix={product.discountPercentage > 15 ? <ArrowDownOutlined /> : ''}
          suffix="$"
        />
      </div>
    </Card>
  )
}
