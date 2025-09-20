import type { FC } from 'react'
import { Col, Row } from 'antd'
import { useGetProductsQuery } from '../../api/server.api'
import { DataEmpty, DataLoader } from '@/shared'
import { ProductsListCard } from '../products-list-card/products-list-card'

interface Props {
  category?: string
}

export const ProductsListLayout: FC<Props> = ({ category }) => {
  const { data, isFetching } = useGetProductsQuery({
    category,
    select: 'id,title,images,thumbnail,rating,price,discountPercentage',
  })

  if (isFetching) {
    return <DataLoader />
  }

  if (!data?.products.length) {
    return <DataEmpty description="Products not found" />
  }

  return (
    <Row justify="space-evenly">
      {data.products.map(product => (
        <Col key={product.id} xs={20} sm={16} md={4} style={{ margin: '2rem' }}>
          <ProductsListCard product={product} />
        </Col>
      ))}
    </Row>
  )
}
