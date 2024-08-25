import { baseApi } from "../../api/baseApi";

const BikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBikes: builder.query({
      query: () => ({
        url: "/bikes",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllBikesQuery } = BikeApi;
