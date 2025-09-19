import { createBrowserRouter } from 'react-router'
import { App } from '@/app/App'
import { ROUTES } from '@/shared'

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <App />,
    children: [
      {
        path: ROUTES.HOME,
        index: true,
        lazy: () => import('@/pages/home/home.page'),
      },
      {
        path: ROUTES.PRODUCTS_CATEGORY,
        lazy: () => import('@/pages/products-category/products-category.page'),
      },
      {
        path: ROUTES.PRODUCT,
        lazy: () => import('@/pages/product-detail/product-detail.page'),
      },
    ],
  },
  { path: ROUTES.OTHER, lazy: () => import('@/pages/not-found/not-found.page') },
])
