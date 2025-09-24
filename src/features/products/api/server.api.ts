import { baseApi } from '@/features/store/base-server.api'
import type { IProductRequestParams, IProductsResponse } from '../models/product'

const productsApi = baseApi.injectEndpoints({
  endpoints: build => ({
    getProducts: build.query<IProductsResponse, IProductRequestParams>({
      query: requestParams => {
        let url = 'products'
        let params = { ...requestParams }

        if (params.category) {
          url = `${url}/category/${params.category}`
        }

        if (!params.limit) {
          params = { ...params, limit: 194 }
        }

        return { url, params }
      },
    }),
  }),
})

export const { useGetProductsQuery } = productsApi
