import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { ICategory } from '../models/models'
import { CONFIG } from '@/shared'

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: CONFIG.API_BASE_URL }),
  endpoints: build => ({
    getCategories: build.query<ICategory[], void>({
      query: () => 'products/categories',
    }),
  }),
})

export const { useGetCategoriesQuery } = categoryApi