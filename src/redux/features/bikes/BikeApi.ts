import { baseApi } from "../../api/baseApi";

const BikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBikes: builder.query({
      query: (params) => ({
        url: "/bikes",
        method: "GET",
        params,
      }),
    }),
    getSingleBike: builder.query({
      query: (id: string) => ({
        url: `/bikes/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllBikesQuery, useGetSingleBikeQuery } = BikeApi;
