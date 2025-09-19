import 'react-router-dom'

export const ROUTES = {
  HOME: '/',
  PRODUCTS_CATEGORY: '/products/category/:slug',
  PRODUCT: '/products/:productId',
  OTHER: '*',
} as const

export type PathParams = {
  [ROUTES.PRODUCTS_CATEGORY]: {
    slug: string
  }
  [ROUTES.PRODUCT]: {
    productId: number
  }
}

declare module 'react-router-dom' {
  interface Register {
    params: PathParams
  }
}
