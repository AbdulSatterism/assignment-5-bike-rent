import { baseApi } from "../../api/baseApi";

const ReviewsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllReviews: builder.query({
      query: () => ({
        url: "/reviews",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllReviewsQuery } = ReviewsApi;
