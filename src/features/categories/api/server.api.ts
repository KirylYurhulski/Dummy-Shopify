import type { ICategory } from '../models/models'
import { baseApi } from '@/features/store/base-server.api'

const categoriesApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getCategories: build.query<ICategory[], void>({
      query: () => 'products/categories',
    }),
  }),
  overrideExisting: false,
})

export const { useGetCategoriesQuery } = categoriesApi
