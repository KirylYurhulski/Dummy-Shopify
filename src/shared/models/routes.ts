import 'react-router-dom'

export const ROUTES = {
  HOME: '/',
  PRODUCTS: '/products',
  PRODUCTS_CATEGORY: '/products/category/:slug',
  PRODUCTS_DETAIL: '/products/:productId',
  OTHER: '*',
} as const

export type PathParams = {
  [ROUTES.PRODUCTS_CATEGORY]: {
    slug: string
  }
  [ROUTES.PRODUCTS_DETAIL]: {
    productId: string
  }
}

declare module 'react-router-dom' {
  interface Register {
    params: PathParams
  }
}
