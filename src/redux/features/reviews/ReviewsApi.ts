import { baseApi } from "../../api/baseApi";

const ReviewsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllReviews: builder.query({
      query: () => ({
        url: "/reviews",
        method: "GET",
      }),
      providesTags: ["review"],
    }),
    addReview: builder.mutation({
      query: (reviewData) => ({
        url: `/reviews`,
        method: "POST",
        body: reviewData,
      }),
      invalidatesTags: ["review"],
    }),

    allCoupon: builder.query({
      query: () => ({
        url: "/coupon",
        method: "GET",
      }),
      providesTags: ["coupon"],
    }),

    addCoupon: builder.mutation({
      query: (couponData) => ({
        url: `/coupon`,
        method: "POST",
        body: couponData,
      }),
      invalidatesTags: ["coupon"],
    }),

    deleteCoupon: builder.mutation({
      query: (id) => ({
        url: `/coupon/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["coupon"],
    }),
  }),
});

export const {
  useGetAllReviewsQuery,
  useAddReviewMutation,
  useAddCouponMutation,
  useAllCouponQuery,
  useDeleteCouponMutation,
} = ReviewsApi;
