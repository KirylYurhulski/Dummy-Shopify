import { useDeferredValue, type FC, type ReactNode } from 'react'
import { DataEmpty, DataLoader } from '@/shared'
import { GridViewLayout } from '../grid-view/grid-view-layout/grid-view-layout'
import { ListViewLayout } from '../list-view/list-view-layout/list-view-layout'
import { useViewMode } from '@/features/products/api/view-context/view-context'
import { VIEW_MODE } from '@/features/products/models/view'

interface Props {
  isFetching: boolean
  isEmpty: boolean
  gridContent: ReactNode
  listContent: ReactNode
}

export const EntitiesContentLayout: FC<Props> = ({
  isFetching,
  isEmpty,
  gridContent,
  listContent,
}) => {
  const { mode } = useViewMode()
  const deferredViewMode = useDeferredValue(mode)
  const isPending = deferredViewMode !== mode

  return (
    <>
      <hr />
      {isFetching && <DataLoader />}
      {isEmpty && !isFetching && <DataEmpty description="Products not found" />}
      {isPending && !isFetching ? (
        <DataLoader tip={'Switching view mode...'} />
      ) : deferredViewMode === VIEW_MODE.GRID ? (
        <GridViewLayout>{gridContent}</GridViewLayout>
      ) : (
        <ListViewLayout>{listContent}</ListViewLayout>
      )}
    </>
  )
}
