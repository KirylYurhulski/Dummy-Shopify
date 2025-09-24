import { EntitiesLayout } from './layout/entities-layout/entities-layout'
import { EtitiesHeaderLayout } from './layout/entities-header-layout/entities-header-layout'
import { EntitiesFiltersLayout } from './layout/entities-filters-layout/entities-filters-layout'
import { EntitiesSearchInput } from './layout/entities-search-input/entities-search-input'
import { EntitiesSortInput } from './layout/entities-sort-input/entities-sort-input'
import { EntitiesViewModeToggle } from './layout/entities-view-mode-toggle/entities-view-mode-toggle'
import { EntitiesContentLayout } from './layout/entities-content-layout/entities-content-layout'
import { GridViewColLayout } from './layout/grid-view/grid-view-col-layout/grid-view-col-layout'
import { ListViewItem } from './layout/list-view/list-view-item/list-view-item'
import { useGetProductsQuery } from '../../api/server.api'

export const ProductEntities = ({ category }: { category?: string }) => {
  const { data, isFetching } = useGetProductsQuery({
    category,
    select: 'id,title,images,thumbnail,rating,price,discountPercentage,description',
  })

  return (
    <EntitiesLayout
      header={<EtitiesHeaderLayout title={'Selected Products'} />}
      filters={
        <EntitiesFiltersLayout
          search={!category && <EntitiesSearchInput />}
          sort={<EntitiesSortInput />}
          actions={<EntitiesViewModeToggle />}
        />
      }
    >
      <EntitiesContentLayout
        isFetching={isFetching}
        isEmpty={data?.products.length === 0}
        gridContent={<GridViewColLayout products={data?.products} />}
        listContent={<ListViewItem products={data?.products} />}
      />
    </EntitiesLayout>
  )
}
