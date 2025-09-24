import type { FC, ReactNode } from 'react'

interface Props {
  search: ReactNode
  filters?: ReactNode
  sort?: ReactNode
  actions: ReactNode
}

export const EntitiesFiltersLayout: FC<Props> = ({ search, filters, sort, actions }) => {
  return (
    <>
      <div style={{ marginBottom: '1rem' }}>{search}</div>
      {filters && <div style={{ marginBottom: '1rem' }}>{filters}</div>}
      {sort && <div style={{ marginBottom: '1rem' }}>{sort}</div>}
      {actions}
    </>
  )
}
