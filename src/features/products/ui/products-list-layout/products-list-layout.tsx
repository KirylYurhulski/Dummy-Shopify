import type { FC } from 'react'

interface Props {
  category?: string
}

export const ProductsListLayout: FC<Props> = ({ category }) => {
  return <div>Products List. Category {category}</div>
}
