import { Col } from 'antd'
import { GridViewCard } from '../grid-view-card/grid-view-card'
import type { IProduct } from '@/features/products/models/product'

export const GridViewColLayout = ({ products }:{ products: IProduct[] | undefined }) => {
  return products?.map(product => (
    <Col key={product.id} xs={20} sm={16} md={4} style={{ margin: '1rem' }}>
      <GridViewCard product={product} />
    </Col>
  ))
}