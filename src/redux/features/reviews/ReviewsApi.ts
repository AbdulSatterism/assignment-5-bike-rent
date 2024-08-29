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
  }),
});

export const { useGetAllReviewsQuery, useAddReviewMutation } = ReviewsApi;
