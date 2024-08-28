import { baseApi } from "../../api/baseApi";

const BikeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBikes: builder.query({
      query: (params) => ({
        url: "/bikes",
        method: "GET",
        params,
      }),
      providesTags: ["bike"],
    }),
    getSingleBike: builder.query({
      query: (id: string) => ({
        url: `/bikes/${id}`,
        method: "GET",
      }),
      providesTags: ["bike"],
    }),

    bookingBike: builder.mutation({
      query: (bookingInfo) => ({
        url: "/rentals",
        method: "POST",
        body: bookingInfo,
      }),
      invalidatesTags: ["bike"],
    }),
    myBooking: builder.query({
      query: () => ({
        url: "/rentals",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllBikesQuery,
  useGetSingleBikeQuery,
  useBookingBikeMutation,
  useMyBookingQuery,
} = BikeApi;
