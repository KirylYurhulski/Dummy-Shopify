import { useParams } from 'react-router-dom'
import type { PathParams, ROUTES } from '@/shared'
import { ProductEntities } from '@/features'

export const ProductsCategoryPage = () => {
  const params = useParams<PathParams[typeof ROUTES.PRODUCTS_CATEGORY]>()

  return <ProductEntities category={params.slug} />
}

export const Component = ProductsCategoryPage
