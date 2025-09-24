import { href, NavLink } from 'react-router-dom'
import { List, Rate, Typography, Image } from 'antd'
import type { IProduct } from '@/features/products/models/product'
import { Price, ROUTES } from '@/shared'

export const ListViewItem = ({ products }: { products: IProduct[] | undefined }) => {
  return products?.map(product => (
    <List.Item key={product.id} actions={[]}>
      <List.Item.Meta
        avatar={
          <Image.PreviewGroup items={product.images}>
            <Image src={product.thumbnail} style={{ width: '150px' }} />
          </Image.PreviewGroup>
        }
        title={
          <NavLink to={href(ROUTES.PRODUCTS_DETAIL, { productId: product.id.toString() })}>
            {product.title}
          </NavLink>
        }
        description={
          <>
            <Typography.Paragraph>{product.description}</Typography.Paragraph>{' '}
            <Rate disabled value={product.rating} />
            <Price price={product.price} discountPercentage={product.discountPercentage} />
          </>
        }
      />
    </List.Item>
  ))
}
