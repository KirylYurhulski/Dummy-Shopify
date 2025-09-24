import React from 'react'
import { href, NavLink } from 'react-router'
import { Card, Image, Rate } from 'antd'
import { Price, ROUTES } from '@/shared'
import type { IProduct } from '@/features/products/models/product'

export const GridViewCard = React.memo(({ product }: { product: IProduct }) => {
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
        <Price price={product.price} discountPercentage={product.discountPercentage} />
      </div>
    </Card>
  )
})
