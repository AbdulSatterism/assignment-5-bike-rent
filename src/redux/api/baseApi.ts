/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://abs-sports-assignment-4.vercel.app/api",
  }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (params) => {
        return {
          url: "/products",
          method: "GET",
          params,
        };
      },
      providesTags: ["product"],
    }),
    getHomeProducts: builder.query({
      query: () => ({
        url: `/products`,
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    manageAllProducts: builder.query({
      query: () => ({
        url: "/manage-products",
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/product/${id}`,
        method: "GET",
      }),
    }),
    addProduct: builder.mutation({
      query: (product) => ({
        url: "/products",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["product"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
    updateProduct: builder.mutation({
      query: ({ _id, item }) => ({
        url: `/product/${_id}`,
        method: "PATCH",
        body: item,
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useGetHomeProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
  useUpdateProductMutation,
  useManageAllProductsQuery,
} = baseApi;
