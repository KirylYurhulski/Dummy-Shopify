import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CONFIG } from '@/shared'

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: CONFIG.API_BASE_URL }),
  endpoints: () => ({}),
})
