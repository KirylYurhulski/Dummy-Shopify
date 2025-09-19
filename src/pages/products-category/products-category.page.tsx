import { useParams } from 'react-router-dom'
import type { PathParams, ROUTES } from '@/shared'
import { ProductsListLayout } from '@/features'

export const ProductsCategoryPage = () => {
  const params = useParams<PathParams[typeof ROUTES.PRODUCTS_CATEGORY]>()

  return <ProductsListLayout category={params.slug} />
}

export const Component = ProductsCategoryPage
