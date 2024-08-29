/* eslint-disable @typescript-eslint/no-explicit-any */
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

    createBike: builder.mutation({
      query: (bikeInfo) => ({
        url: "/bikes",
        method: "POST",
        body: bikeInfo,
      }),
      invalidatesTags: ["bike"],
    }),

    updateBike: builder.mutation({
      query: (args) => ({
        url: `/bikes/${args.id}`,
        method: "PUT",
        body: args.updateInfo,
      }),
      invalidatesTags: ["bike"],
    }),

    deleteBike: builder.mutation({
      query: (id) => ({
        url: `/bikes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["bike"],
    }),

    myBooking: builder.query({
      query: () => ({
        url: "/rentals",
        method: "GET",
      }),
      providesTags: ["booking"],
    }),

    bookingBike: builder.mutation({
      query: (bookingInfo) => ({
        url: "/rentals",
        method: "POST",
        body: bookingInfo,
      }),
      invalidatesTags: ["bike", "booking"],
    }),

    returnRentalBike: builder.mutation({
      query: (id) => ({
        url: `/rentals/${id}/return`,
        method: "PUT",
      }),
      invalidatesTags: ["booking", "bike"],
    }),

    payment: builder.mutation({
      query: (paymentInfo) => ({
        url: `/rental-pay/pay`,
        method: "POST",
        body: paymentInfo,
      }),
      invalidatesTags: ["booking", "bike"],
    }),
  }),
});

export const {
  useGetAllBikesQuery,
  useGetSingleBikeQuery,
  useBookingBikeMutation,
  useMyBookingQuery,
  useCreateBikeMutation,
  useUpdateBikeMutation,
  useDeleteBikeMutation,
  useReturnRentalBikeMutation,
  usePaymentMutation,
} = BikeApi;
