//
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL: string = import.meta.env.VITE_REACT_APP_BACKEND_URL;
const API_VERSION: string = "api";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/${API_VERSION}` }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "products",
    }),
    getProduct: builder.query({
      query: (id: string) => `products/${id}`,
    }),
    // addProduct: builder.mutation({
    //   query: (payload) => ({
    //     url: "products",
    //     method: "POST",
    //     body: payload,
    //   }),
    // }),
    // updateProduct: builder.mutation({
    //   query: ({ id, ...payload }) => ({
    //     url: `products/${id}`,
    //     method: "PUT",
    //     body: payload,
    //   }),
    // }),
    // deleteProduct: builder.mutation({
    //   query: (id: string) => ({
    //     url: `products/${id}`,
    //     method: "DELETE",
    //   }),
    // }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  // useAddProductQuery,
  // useUpdateProductQuery,
  // useDeleteProductQuery,
} = api;
